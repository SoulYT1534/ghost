module.exports = async (client) => {
  function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  async function rock_paper_scissors(choice) {
    choice = choice+1
    const choices = ["rock", "paper", "scissors"]
    const botchoice = Math.floor(Math.random() * choices.length)+1
    choice = Number(choice)
    var result;
    var Result;
    if(choice === 1 && botchoice === 3) {
      result = "win"
      Result = ">"
    }else if(choice === 1 && botchoice === 2) {
      result = "lose"
      Result = "<"
    }else if(choice === 2 && botchoice === 1) {
      result = "win"
      Result = ">"
    }else if(choice === 2 && botchoice === 3) {
      result = "lose"
      Result = "<"
    }else if(choice === 3 && botchoice === 2) {
      result = "win"
      Result = ">"
    }else if(choice === 3 && botchoice === 1) {
      result = "lose"
      Result = "<"
    }else if(choice === botchoice) {
      result = "draw"
      Result = "="
    }
    const text = `[${choices[choice-1]}] ${Result} ${choices[botchoice-1]}`
    var win;
    if(result === "win") {
      win = true
    }else{
      win = false
    }
    result[0] = result[0].toUpperCase();
    return {result, text, win}
    }
  function getJob() {
    const jobs = ["Discord Moderator", "Discord Admin", "Office Worker", "Guard", "Programmer", "Lumber Worker", "Miner", "Car Driver"]
    const randomized = Math.floor(Math.random()*jobs.length)
    return jobs[randomized]
  }
  function beg(boolean, message) {
    if(boolean === false) return;
      const people = ["Your friend", "Your dad", "Your mom", "Stranger", "Elon Musk", "Intruder", "Thief", "Enemy", "Your ex", "Your crush", "Your soulmate", "Your girlfriend", "Your wife", "Your son", "Your grandfather", "Your grandmother", "Your cousin", "Your uncle", "Your classmate", "Homeless guy", "Bully", "Quiet kid", "Nerd", "Anime kid", "Wibu", "Gamer", "[MISSING]", "Gigachad", "Megachad", "Chad", "idk", "[WANTED]", "Robber", "The one under your bed", "Backrooms entity", "Blind person", "Old man", "Old woman", "Group of donors", "Minecraft Steve", "???", "Yourself", "Discord Mod", "Discord Admin", "Discord Owner", "Discord Banned", "Discord Kitten", "Random Russian Guy", "Wise Mystical Tree", "Goku Drip", "The Rich One", "Ghost", message.user.username]
  const messages = [{msg: "Oh you poor little beggar, here get some money...", accept: true}, {msg: "You need money? Sure. Here's some money...", accept: true}, {msg: "Why don't you go get a job bro?", accept: false}, {msg: "I hope you don't use it for alcoholic...", accept: true}, {msg: "🤓 No.", accept: false}, {msg: "OMG LOOK AT THIS BEGGAR...", accept: false}, {msg: "Here.", accept: true}, {msg: "Nah, stay away from me.", accept: false}, {msg: "Ew you dirty, you shoudn't touch me!", accept: false}]
  var money = Math.floor(Math.random()*50)
  var result = [people[Math.floor(Math.random() * people.length)], messages[Math.floor(Math.random() * messages.length)]]
    return {money, result}
  }
  const {CommandCooldown, msToMinutes} = require('discord-command-cooldown');
const ms = client.ms
async function cooldown(name, time, message, _function) {
const Cooldown = new CommandCooldown(name, ms(time));
const user = await Cooldown.getUser(message.author ? message.author.id : message.user.id);
if(user){
        const timeLeft = msToMinutes(user.msLeft, false); // False for excluding '0' characters for each number < 10
        message.followUp(`You need to wait ${ timeLeft.hours + ' hours, ' + timeLeft.minutes + ' minutes, ' + timeLeft.seconds + ' seconds'} before running command again!`);
    }else{
  await _function(message)
  await Cooldown.addUser(message.author ? message.author.id : message.user.id)
    }
}
    function listElementToNum (list, numForArray) {
    list[numForArray] = Number(list[numForArray])
  }
const arr = x => Array.from(x);
const num = x => Number(x) || 0;
const str = (...x) => {
return String(x.join(""))  
};
const isEmpty = xs => xs.length === 0;
const take = n => xs => xs.slice(0,n);
const drop = n => xs => xs.slice(n);
const reverse = xs => xs.slice(0).reverse();
const comp = f => g => x => f (g (x));
const not = x => !x;
const chunk = n => xs =>
  isEmpty(xs) ? [] : [take(n)(xs), ...chunk (n) (drop (n) (xs))];
function rank (n) {
  const ranks = {
    1: "1st",
    2: "2nd",
    3: "3rd",
    4: "4th",
    5: "5th",
    6: "6th",
    7: "7th",
    8: "8th",
    9: "9th",
    10: "10th"
  }
  return ranks[num(n)]
}
function numToWords (n) {
  let a = [
    '', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  let b = [
    '', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];
  let g = [
    '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
    'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
  ];
  // this part is really nasty still
  // it might edit this again later to show how Monoids could fix this up
  let makeGroup = ([ones,tens,huns]) => {
    return [
      num(huns) === 0 ? '' : a[huns] + ' hundred',
      num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
      a[tens+ones] || a[ones]
    ].join('');
  };
  // "thousands" constructor; no real good names for this, i guess
  let thousand = (group,i) => group === '' ? group : `${group} ${g[i]}`;
  // execute !
  if (typeof n === 'number') return numToWords(String(n));
  if (n === '0')             return 'zero';
  return comp (chunk(3)) (reverse) (arr(n))
    .map(makeGroup)
    .map(thousand)
    .filter(comp(not)(isEmpty))
    .reverse()
    .join(' ');
};
  function formatBytes(bytes) {
    if(bytes === 0) return '0 Bytes';
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${parseFloat(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`
  }
  function calculator(problem) {
  const calc = {
    "+" : "plus",
    "-" : "minus",
    "*" : "multiply by",
    "/" : "devide by"
  }
  const array = ["+", "-", "*", "/"]
  const found = array.find(x=>problem.includes(x))
  const prob = problem.split(found)
  const problemString = problem.split(found)
  prob.splice(1, 0, found)
  var RETURNS_DATA;
  var result;
  listElementToNum(prob, 0)
  listElementToNum(prob, 2)
  // numToWords :: (Number a, String a) => a -> String
  if(array.find(x => x === prob[1])) {
    const answerV1 = eval(`${problemString[0]} ${found} ${problemString[1]}`)
    const answerV2 = `${problemString[0]} ${found} ${problemString[1]} = ${answerV1}`
    result = `${numToWords(prob[0])} ${calc[prob[1]]} ${numToWords(prob[2])}equals to ${numToWords(answerV1)}`
    result = result.split(" ").join("|").replace("||", "|").split("|").join(" ")
    result = result.slice(0, -1)
  RETURNS_DATA = {consoleLogV1: function () {
    console.log(result)
  },
                  consoleLogV2: function () {
                    console.log({"First result": result, "Second result": answerV2})
                  },
            directValueV1: result,
    directValueV2: {"First result": result, "Second result": answerV2}
  }
  }  
  return RETURNS_DATA
}
  function emoji (name, id) {
    return `<a:${name}:${id}>`
  }
  client.utils = {emoji, formatBytes, numToWords, listElementToNum, arr, num, str, isEmpty, take, drop, reverse, not, cooldown, beg, getJob, rank, rock_paper_scissors, capitalizeFirstLetter}
}