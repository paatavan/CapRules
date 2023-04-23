
client.on('interactionCreate', async interaction => {
  if (interaction.commandName === "soundb") {
    const channel = interaction.channel;
    console.log('| ✅ Bouton fonctionneles.')
    const row = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixilframe04:1098625602807926887> ')
          .setCustomId('row_0_button_0'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Sad Time').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_1'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Pas Drole')
          .setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_3'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Pas nete').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_4'),
        new Discord.MessageButton()
          .setStyle('SECONDARY').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setLabel('On s\'en bas les couilles.')
          .setCustomId('row_0_button_5'),
      );
      const row2 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixilframe02:1098613052867354634> ')
          .setCustomId('row_0_button_6'),
        new Discord.MessageButton()
        .setStyle('SECONDARY')
          .setLabel('Meow').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_7'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Alerte aux Gogolles').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_8'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Allucination Collecti').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_9'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Cheh!').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_10'),
      );
      const row3 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixilframe01:1098612346378780684> ')
          .setCustomId('row_0_button_11'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Wenomechainsama').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_12'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Bomb as been Plant ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_13'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Glace').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_14'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Feur !').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_15'),
      );
      const row4 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixilframe03:1098613901601550446> ')
          .setCustomId('row_0_button_16'),
         
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Pates au Sucre').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_17'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Android').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_18'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Asian ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_19'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('On a Probleme').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_20'),
      );
      const row5 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixel_symbol_greater:1098295674614841374> ')
          .setCustomId('row_0_button_21'),
         
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Free Nitro!').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_22'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Marioooo').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_23'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Et  je me tappe ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_24'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('The Pierre').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_25'),
      );
      const row6 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixel_symbol_greater:1098295674614841374> ')
          .setCustomId('row_0_button_26'),
         
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('école !').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_27'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Incredible').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_28'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Nice shot ! ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_29'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Erreur ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_30'),
      );
      const row7 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixel_symbol_greater:1098295674614841374> ')
          .setCustomId('row_0_button_31'),
        
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Let me do it!').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_32'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Lego ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_33'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Aquaman ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_34'),
        new Discord.MessageButton()
          .setStyle('SECONDARY').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setLabel('Siren')
          .setCustomId('row_0_button_35'),
      );
      const row8 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixel_symbol_greater:1098295674614841374> ')
          .setCustomId('row_0_button_36'),
        
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Wat du hell !').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_37'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Gnome ou').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_38'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Bing Chilling ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_39'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('The Voice !').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_40'),
      );  
      const row9 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixel_symbol_greater:1098295674614841374> ')
          .setCustomId('row_0_button_41'),
          
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('oh noo!').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_42'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Wait a minute..').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_43'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Jumpscare !!').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_44'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Sikeee').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_45'),
      );
      const row10 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixel_symbol_greater:1098295674614841374> ')
          .setCustomId('row_0_button_46')
        .setDisabled(false),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('esso!').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_47'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Few moment later').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_48'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Glup glup ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_49'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('CapyBara')
          .setCustomId('row_0_button_50')
          .setEmoji('<:pixilframe05:1098679544162046063> ')
      );
      const row11 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixel_symbol_greater:1098295674614841374> ')
          .setCustomId('row_0_button_51'),
         
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Tin tin tin !').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_52'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('BIP BIP').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_53'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Pervers ! ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_54'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Windows ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_55'),
      );
      const row12 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
             .setEmoji('<:pixel_symbol_greater:1098295674614841374> ')
          .setCustomId('row_0_button_56'),
        
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Ip ip ip!').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_57'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Juicy fart').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button58'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('My life be like').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_59'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Its been a year daddy').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_60'),
      );
      const row13 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixel_symbol_greater:1098295674614841374> ')
          .setCustomId('row_0_button_61'),
        
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Son !').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_62'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('ROAAR').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_63'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Old RAdio ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_64'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Fortinayt or Babadi !').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_65'),
      );
      const row14 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:pixel_symbol_greater:1098295674614841374> ')
          .setCustomId('row_0_button_66'),
          
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Metal Pipe!').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_67'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Censor').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_68'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Bass Drop !!').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_69'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Patron ?').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_70'),
      );
      const row15 = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
        .setStyle('SUCCESS')
          .setEmoji('<:6380pixelsymbolplus:1098610560242823278> ')
          .setCustomId('row_0_button_71')
        .setDisabled(true),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Women !').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_72'),
       
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('I like your cut G').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_73'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('Glup glup ').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_74'),
        new Discord.MessageButton()
          .setStyle('SECONDARY')
          .setLabel('peppa !').setEmoji('<:pixilframe05:1098679544162046063> ')
          .setCustomId('row_0_button_75')
          
      );

     

      await interaction.reply({ components: [row, row2, row3, row4, row5], });
      await interaction.channel.send({ components: [row6, row7, row8, row9, row10], });
      await interaction.channel.send({ components: [row11, row12, row13, row14, row15],  });
  }
});
