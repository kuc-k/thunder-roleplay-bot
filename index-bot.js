const { Client, GatewayIntentBits, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, SlashCommandBuilder, REST, Routes } = require('discord.js');
require('dotenv').config();

// Konfiguracja klienta Discord
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
    ]
});

// Przechowywanie danych użytkowników
const userData = new Map();

// Event: Bot gotowy
client.once('ready', async () => {
    console.log(`✅ Bot ${client.user.tag} jest online!`);
    console.log(`📊 Obecny na ${client.guilds.cache.size} serwerach`);
    
    // Rejestracja komend slash
    const commands = [
        new SlashCommandBuilder()
            .setName('formularz')
            .setDescription('Wypełnij formularz zgłoszeniowy do Thunder Roleplay'),
        new SlashCommandBuilder()
            .setName('pokaz_dane')
            .setDescription('Wyświetl swoje zapisane dane z formularza')
    ].map(command => command.toJSON());

    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

    try {
        console.log('🔄 Rejestrowanie komend slash...');
        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands }
        );
        console.log('✅ Komendy slash zarejestrowane pomyślnie!');
    } catch (error) {
        console.error('❌ Błąd podczas rejestracji komend:', error);
    }
});

// Obsługa interakcji
client.on('interactionCreate', async (interaction) => {
    try {
        // Obsługa komend slash
        if (interaction.isChatInputCommand()) {
            if (interaction.commandName === 'formularz') {
                // Tworzenie modala
                const modal = new ModalBuilder()
                    .setCustomId('thunderRoleplayModal')
                    .setTitle('Wypełnij dane do dowodu');

                // Pola formularza
                const imieNazwiskoInput = new TextInputBuilder()
                    .setCustomId('imieNazwisko')
                    .setLabel('Imię i nazwisko')
                    .setStyle(TextInputStyle.Short)
                    .setPlaceholder('Wpisz imię i nazwisko...')
                    .setRequired(true)
                    .setMaxLength(100);

                const dataUrodzInput = new TextInputBuilder()
                    .setCustomId('dataUrodzenia')
                    .setLabel('Data Urodzenia (DD.MM.YYYY)')
                    .setStyle(TextInputStyle.Short)
                    .setPlaceholder('np. 21.12.2000')
                    .setRequired(true)
                    .setMaxLength(10);

                const obywatelstwoInput = new TextInputBuilder()
                    .setCustomId('obywatelstwo')
                    .setLabel('Obywatelstwo')
                    .setStyle(TextInputStyle.Short)
                    .setPlaceholder('Wpisz obywatelstwo...')
                    .setRequired(true)
                    .setMaxLength(50);

                const historiaInput = new TextInputBuilder()
                    .setCustomId('historiaPostaci')
                    .setLabel('Historia Postaci')
                    .setStyle(TextInputStyle.Paragraph)
                    .setPlaceholder('Opisz historię swojej postaci...')
                    .setRequired(true)
                    .setMaxLength(200);

                const nickRobloxInput = new TextInputBuilder()
                    .setCustomId('nickRoblox')
                    .setLabel('Nick Roblox')
                    .setStyle(TextInputStyle.Short)
                    .setPlaceholder('Wpisz nick z Roblox...')
                    .setRequired(true)
                    .setMaxLength(50);

                // Dodanie pól do rzędów (każde pole w osobnym ActionRow)
                const row1 = new ActionRowBuilder().addComponents(imieNazwiskoInput);
                const row2 = new ActionRowBuilder().addComponents(dataUrodzInput);
                const row3 = new ActionRowBuilder().addComponents(obywatelstwoInput);
                const row4 = new ActionRowBuilder().addComponents(historiaInput);
                const row5 = new ActionRowBuilder().addComponents(nickRobloxInput);

                modal.addComponents(row1, row2, row3, row4, row5);

                await interaction.showModal(modal);
            }

            if (interaction.commandName === 'pokaz_dane') {
                const userId = interaction.user.id;

                if (!userData.has(userId)) {
                    return interaction.reply({
                        content: '❌ Nie masz jeszcze zapisanych danych. Wypełnij formularz komendą `/formularz`',
                        ephemeral: true
                    });
                }

                const data = userData.get(userId);
                const embed = new EmbedBuilder()
                    .setTitle('📋 Twoje zapisane dane')
                    .setColor(0x57f287)
                    .addFields(
                        { name: '👤 Imię i nazwisko', value: data.imieNazwisko, inline: true },
                        { name: '🎂 Data urodzenia', value: data.dataUrodzenia, inline: true },
                        { name: '🌍 Obywatelstwo', value: data.obywatelstwo, inline: true },
                        { name: '📖 Historia postaci', value: data.historiaPostaci, inline: false },
                        { name: '🎮 Nick Roblox', value: data.nickRoblox, inline: true },
                        { name: '📅 Data wypełnienia', value: data.timestamp, inline: true }
                    )
                    .setTimestamp();

                await interaction.reply({ embeds: [embed], ephemeral: true });
            }
        }

        // Obsługa wysłania modala
        if (interaction.isModalSubmit()) {
            if (interaction.customId === 'thunderRoleplayModal') {
                const imieNazwisko = interaction.fields.getTextInputValue('imieNazwisko');
                const dataUrodzenia = interaction.fields.getTextInputValue('dataUrodzenia');
                const obywatelstwo = interaction.fields.getTextInputValue('obywatelstwo');
                const historiaPostaci = interaction.fields.getTextInputValue('historiaPostaci');
                const nickRoblox = interaction.fields.getTextInputValue('nickRoblox');

                // Zapisanie danych
                userData.set(interaction.user.id, {
                    imieNazwisko,
                    dataUrodzenia,
                    obywatelstwo,
                    historiaPostaci,
                    nickRoblox,
                    timestamp: new Date().toLocaleString('pl-PL')
                });

                // Utworzenie embeda
                const embed = new EmbedBuilder()
                    .setTitle('📋 Nowe zgłoszenie do Thunder Roleplay')
                    .setColor(0x5865f2)
                    .addFields(
                        { name: '👤 Imię i nazwisko', value: imieNazwisko, inline: true },
                        { name: '🎂 Data urodzenia', value: dataUrodzenia, inline: true },
                        { name: '🌍 Obywatelstwo', value: obywatelstwo, inline: true },
                        { name: '📖 Historia postaci', value: historiaPostaci, inline: false },
                        { name: '🎮 Nick Roblox', value: nickRoblox, inline: true }
                    )
                    .setFooter({ 
                        text: `Zgłoszenie od ${interaction.user.tag}`, 
                        iconURL: interaction.user.displayAvatarURL() 
                    })
                    .setTimestamp();

                // Wysłanie embeda na kanał
                await interaction.channel.send({ embeds: [embed] });

                // Zmiana pseudonimu użytkownika
                try {
                    await interaction.member.setNickname(imieNazwisko);
                    await interaction.reply({
                        content: `✅ Formularz został wypełniony!\n\nTwój pseudonim został zmieniony na: **${imieNazwisko}**\n\nDane zostały zapisane i można je wyświetlić komendą \`/pokaz_dane\``,
                        ephemeral: true
                    });
                } catch (error) {
                    console.error('Błąd zmiany pseudonimu:', error);
                    await interaction.reply({
                        content: '✅ Formularz został wypełniony i dane zapisane!\n\n⚠️ Nie mogę zmienić Twojego pseudonimu (brak uprawnień lub jesteś właścicielem serwera).',
                        ephemeral: true
                    });
                }
            }
        }
    } catch (error) {
        console.error('❌ Błąd podczas obsługi interakcji:', error);
        
        try {
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: '❌ Wystąpił błąd podczas przetwarzania żądania.', ephemeral: true });
            } else {
                await interaction.reply({ content: '❌ Wystąpił błąd podczas przetwarzania żądania.', ephemeral: true });
            }
        } catch (err) {
            console.error('Nie można wysłać wiadomości o błędzie:', err);
        }
    }
});

// Obsługa błędów
process.on('unhandledRejection', error => {
    console.error('❌ Nieobsłużone odrzucenie Promise:', error);
});

// Logowanie bota
console.log('🚀 Uruchamianie bota Thunder Roleplay...');
client.login(process.env.TOKEN).catch(error => {
    console.error('❌ Błąd logowania:', error);
    console.error('\n💡 Sprawdź czy:');
    console.error('1. Token w pliku .env jest poprawny');
    console.error('2. W Discord Developer Portal włączyłeś Server Members Intent');
    process.exit(1);
});