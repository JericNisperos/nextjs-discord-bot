// Add this to your help.ts file or create a new file for your commands if preferred

import { SlashCommandBuilder } from "@discordjs/builders";
import { fetchBotCommands } from "@/utils/discord-api";
import type { executeCommand } from "@/types";

export const hello = new SlashCommandBuilder()
  .setName("hello")
  .setDescription("Says Hello World");

export const executeHello: executeCommand = async (interaction) => {
  // Create an embed message
  const embed = {
    title: "Hello World",
    description: "This is a custom embed message.",
    color: 0x34d9d9,
  };

  return {
    type: 4,
    data: {
      embeds: [
        {
          embeds: [embed],
        },
      ],
    },
  };
};