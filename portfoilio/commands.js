var youtube = "";
var twitter = "";
var password = "";
var notion =
  "https://blossom-caboc-406.notion.site/747aef2417084f708e8e8db6e69a2347";
var velog = "https://velog.io/@savazy_gg";
var github = "https://github.com/savazyggg";
var email = "mailto:younji0715@gmail.com";
const portfolio =
  "https://blossom-caboc-406.notion.site/747aef2417084f708e8e8db6e69a2347";

whois = [
  "<br>",
  "안녕하세요!👋",
  "<br>",
  "프론트 엔드 개발자, ",
  "DO! 실행력있는, ",
  "HOW? 문제는 파고드는, ",
  "WHY? 호기심 많은, 이윤지 입니다.",
  "<br>",
  "이전에 브랜드매니저로 근무하며 자사몰 관련하여 개발자님과 소통한 경험이 있습니다.",
  "해당 과정에서 개발자님이 하던 기술적 고민, 로직 설계, 성장 등에 흥미를 느끼며 개발자의 길에 대해 생각해보게 됐습니다.",
  "<br>",
  "다양한 기술스택을 알아가며 끝없이 배워가는 과정이 즐거울 것 같았고,",
  "다양한 사람들과 하나의 목표를 향해 나아가며 프로젝트의 성과를 내는 것이 가치있다고 느꼈습니다.",
  "<br>",
  "또한 복합적으로 얽힌 문제의 분기점을 짚으며 케이스를 따라가며 고찰하는 과정이 재밌을 것 같았습니다.",
  "마지막으로 지식을 공유하고자 하는 문화가 인상 깊었습니다. 저도 새롭게 안 사실, 도움이 될 것 같은 지식들을 듣고 말하는 것을 좋아하거든요.",
  "이러한 이유로 프론트 엔지니어의 길을 걷게 되었는데요.",
  "<br>",
  "방대한 프로그래밍 분야를 공부하기위해 제가 어떤 노력을 하고 있고, 어떤 철학을 가지고 어떻게 성장을 할지 흥미로우신가요?",
  "<br>",
  "To see more detail, input:",
  '<span class="command">npm run start</span>',
  "<br>",
];

social = [
  "<br>",
  'notion         <a href="' +
    notion +
    '" target="_blank">notion/younji' +
    "</a>",
  'velog          <a href="' +
    velog +
    '" target="_blank">velog/savazy_gg' +
    "</a>",
  'github         <a href="' +
    github +
    '" target="_blank">github/savazyggg' +
    "</a>",
  "<br>",
];

//포트폴리오 url
projects = [
  "<br>",
  "Still curating... most projects are on GitHub, or confidential. :)",
  "But still want to see more,",
  "<br>",
  "To see more detail, input:",
  '<span class="command">npm run start</span>',
  "<br>",
];

help = [
  "<br>",
  '<span class="command">whois</span>          Who is Younji Lee?',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">projects</span>       View coding projects',
  '<span class="command">history</span>        View command history',
  '<span class="command">help</span>           For a list of available commands',
  '<span class="command">email</span>          younji0715@gmail.com',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Display the header',
  "<br>",
];

banner = [
  '<span class="index">younji Lee (YJ) Not A Corporation. All knights reserved.</span>',
  "                                                                                                                                                        ",
  "                                                                                                                                                        ",
  "                                                                           jjjj   iiii                    LLLLLLLLLLL                                                     ",
  "                                                                          j::::j i::::i                   L:::::::::L                                                     ",
  "                                                                           jjjj   iiii                    L:::::::::L                                                     ",
  "                                                                                                          LL:::::::LL                                                     ",
  "yyyyyyy           yyyyyyy ooooooooooo   uuuuuu    uuuuuunnnn  nnnnnnnn   jjjjjjjiiiiiii                     L:::::L              ",
  " y:::::y         y:::::yoo:::::::::::oo u::::u    u::::un:::nn::::::::nn j:::::ji:::::i                     L:::::L                ",
  "  y:::::y       y:::::yo:::::::::::::::ou::::u    u::::un::::::::::::::nn j::::j i::::i                     L:::::L               ",
  "   y:::::y     y:::::y o:::::ooooo:::::ou::::u    u::::unn:::::::::::::::nj::::j i::::i                     L:::::L              ",
  "    y:::::y   y:::::y  o::::o     o::::ou::::u    u::::u  n:::::nnnn:::::nj::::j i::::i                     L:::::L              ",
  "     y:::::y y:::::y   o::::o     o::::ou::::u    u::::u  n::::n    n::::nj::::j i::::i                     L:::::L               ",
  "      y:::::y:::::y    o::::o     o::::ou::::u    u::::u  n::::n    n::::nj::::j i::::i                     L:::::L                ",
  "       y:::::::::y     o::::o     o::::ou:::::uuuu:::::u  n::::n    n::::nj::::j i::::i                     L:::::L         LLLLLL   ",
  "        y:::::::y      o:::::ooooo:::::ou:::::::::::::::uun::::n    n::::nj::::ji::::::i     ::::::::     LL:::::::LLLLLLLLL:::::L   ",
  "         y:::::y       o:::::::::::::::o u:::::::::::::::un::::n    n::::nj::::ji::::::i     ::::::::     L::::::::::::::::::::::L  ",
  "        y:::::y         oo:::::::::::oo   uu::::::::uu:::un::::n    n::::nj::::ji::::::i     ::::::::     L::::::::::::::::::::::L    ",
  "       y:::::y            ooooooooooo       uuuuuuuu  uuuunnnnnn    nnnnnnj::::jiiiiiiii     ::::::::     LLLLLLLLLLLLLLLLLLLLLLLL    ",
  "      y:::::y                                                             j::::j                                                                        ",
  "     y:::::y                                                    jjjj      j::::j                                                                        ",
  "    y:::::y                                                    j::::jj   j:::::j    2023 -v                                                     ",
  "   y:::::y                                                     j::::::jjj::::::j    *origin templet from FK code                                                                    ",
  "  yyyyyyy                                                       jj::::::::::::j                                                                         ",
  "                                                                  jjj::::::jjj                                                                          ",
  "                                                                     jjjjjj                                                                             ",
  '<span class="color2">Welcome to interactive web terminal.</span>',
  '<span class="color2">For a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
];
