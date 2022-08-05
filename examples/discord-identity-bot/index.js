// Copyright (c) 2021-2022 BuiltByBit (Mick Capital Pty. Ltd.)
// MIT License (https://github.com/BuiltByBit/js-api-wrapper/blob/main/LICENSE)

const { Wrapper, Token, TokenType, Error } = require("@builtbybit/api-wrapper");
const { Client, Intents } = require('discord.js');

const bbbToken = new Token(TokenType.PRIVATE, "Find @ https://builtbybit.com/account/api");
const botToken = "Find @ https://discord.com/developers/applications";

const GUILD_ID = "0";
const ROLE_ID = "0";
const CHANNEL_ID = "0";

let guild = undefined;
let channel = undefined;
let role = undefined;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const wrapper = new Wrapper();

async function main() {
    await client.login(botToken);
    await wrapper.init(bbbToken);

    guild = await client.guilds.fetch(GUILD_ID);
    channel = await client.channels.fetch(CHANNEL_ID);
    role = await guild.roles.fetch(ROLE_ID);

    client.on("guildMemberAdd", join);
}

async function join(user) {
    if (user.guild.id !== guild.id) return;

    let member;
    try {
        member = await wrapper.members().fetchByDiscord(Number(user.user.id));
    } catch (error) {
        if (error instanceof Error && error.code() === "MemberNotFound") {
            await channel.send(`[BuiltByBit] No member found for ${user}.`);
        }

        throw error;
    }

    let member_url = `https://wbuiltbybit.com/members/${member.member_id}/`;
    await channel.send(`[BuiltByBit] A member was found for ${user}: '${member.username}' (${member_url}).`);

    await user.roles.add(role);
}

main().catch(error => console.error("ERROR: " + error));