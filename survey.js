const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer1) => {
  console.log(`Thank you for your answer: ${answer1}`);

  rl.question('What\'s an activity you like doing? ', (answer2) => {
    console.log(`Thank you for your answer: ${answer2}`);

    rl.question('What do you listen to while doing that? ', (answer3) => {
      console.log(`Thank you for your answer: ${answer3}`);


      rl.question('Which meal is your favourite? ', (answer4) => {
        console.log(`Thank you for your answer: ${answer4}`);



        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          console.log(`Thank you for your answer: ${answer5}`);



          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            console.log(`Thank you for your answer: ${answer6}`);



            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`Thank you for your answer: ${answer7}`);

              rl.close();
              console.log(`Hello, my name is ${answer1}. I like to ${answer2} while listening to ${answer3}.\n My favourite meal is ${answer4} and my favourite thing to eat for that meal is ${answer5}. \n My favourite sport is ${answer6} and my super power is ${answer7}.`);
            });

          });

        });

      });

    });

  });

});