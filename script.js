$(document).ready(function() {

  // Show the initial dialogue box on website load or reload
  var dialogBox = $('.dialog-box');
  var commandPrompt = dialogBox.find('.command-prompt');
  var initialText = `
    <span class="text">Hey there! Welcome to the journey for a retro experience!</span>
    <span class="text">This is my personal website which will give you 90's vibes!</span>
    <span class="text">Sit tight and enjoy!</span>
  `;
  typeText(commandPrompt, initialText);

  // Close the dialog box when the close button is clicked
  $('.close-button').click(function() {
    dialogBox.hide();
    $('.dialog-overlay').hide();
  });

  // Handle icon click events
  $('.icon').click(function(e) {
    e.preventDefault();
    var iconName = $(this).find('span').text();

    if (iconName === 'Resume') {
      // Open the resume PDF directly
      window.open($(this).attr('href'), '_blank');
    } else if (iconName === 'About Me') {
      // Show the about me dialogue box
      var dialogBox = $('.dialog-box');
      var commandPrompt = dialogBox.find('.command-prompt');
      var aboutMeText = `
        <span class="text">Welcome to my retro-inspired journey! I'm Sompadma Mukherjee, a final year BTech student with a deep passion for technology and creating captivating designs. Data analysis is my true calling, as I love unraveling hidden stories within datasets and extracting valuable insights for informed decision-making. </span>
        <span class="text"> Proficient in SQL, Java, and Python (Basic), I possess the technical skills to manipulate and analyze data with precision. Additionally, my understanding of web development allows me to bring designs to life and create interactive digital experiences. </span>
        <span class="text">As I near the end of my academic journey, I am eagerly seeking opportunities to contribute my skills and creativity to innovative projects at reputable IT companies.</span>
        <span class="text">Please click on the "resume" icon to explore my expertise and academic achievements. Thank you for visiting, and have a wonderful day filled with inspiration!</span>
      `;
      showDialog(aboutMeText, 'red');
    } else if (iconName === 'Contact') {
      // Show the contact dialogue box
      var contactText = `
        <span class="text">Email: mukherjeesompadma@gmail.com</span>
        <span class="text">Phone number: +91-9330480602</span>
      `;
      showDialog(contactText);
    } else if (iconName === 'Projects') {
      // Show the projects dialogue box
      var projectText = `
      <span class="text">Project 1 Name: <a href="https://github.com/NullCoder11/Diwali-Sales-Analysis-Using-Python" target="_blank">Diwali Sales Analysis Using Python</a></span><br>
      <span class="text">Project 2 Name: <a href="https://github.com/NullCoder11/MuzyChat" target="_blank">Muzy Chat</a></span><br>
      <span class="text">Project 3 Name: <a href="https://nullcoder11.github.io/deploytest/" target="_blank">MoviePedia</a></span><br>
      `;
      showDialog(projectText);
    } else {
      // Hide the dialog box for other icons
      dialogBox.hide();
      $('.dialog-overlay').hide();
    }
  });
});

function typeText(element, text) {
  var index = 0;
  var speed = 50;
  element.html(''); // Clear existing content
  var typing = setInterval(function() {
    if (index < text.length) {
      var currentChar = text.charAt(index);
      if (currentChar === '<') {
        // Skip HTML tags
        var endIndex = text.indexOf('>', index);
        index = endIndex + 1;
      } else {
        element.append(currentChar);
        index++;
      }
    } else {
      clearInterval(typing);
    }
  }, speed);
}

function showDialog(content, colorClass = '') {
  var dialogBox = $('.dialog-box');
  var commandPrompt = dialogBox.find('.command-prompt');
  commandPrompt.html('');
  dialogBox.attr('class', 'dialog-box').addClass(colorClass);
  typeText(commandPrompt, content);
  dialogBox.show();
  $('.dialog-overlay').show();
}
