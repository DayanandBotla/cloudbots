
    const successStories = [
        {
            "student": "Rajvardhan",
            "msg": "I have joined Aws course for 4 weeks! it as very good interactive program by CloudBots in Hitech city branch. Srikanth sir explained Aws concepts with real time examples. the most interesting part during the course was dealing with the projects, it was very challenging and thrilling",
            "company": "Accenture",
            "role": "AWS Trainee"
        },
        {
            "student": "Sohaib Samad",
            "msg": "I was ur student from may 2023 that time I was in my 2nd year now I'll be going in 4 year. I am really happy to announce that I got an offer letter for position  AWS Cloud Engineer at Talent Cogent",
            "company": "AWS Cloud Engineer",
            "role": "Talent Cogent"
        },
        {
            "student": "Ruturaj Borhade",
            "msg": "Raj here i am attending your AWS, Devops lecture I am happy to tell you that I am join one of the company is *WISSION INFOTECH* As a AWS trainee engineer at Bengaluru There is 2 year of bond Thanks To You giving me right advice.....Thank you sir",
            "company": "WISSION INFOTECH",
            "role": "AWS trainee engineer"
        },
        {
            "student": "Sarfaraz Ali Khan",
            "msg": "Good evening sir, Sarfaraz from this side I got a job in noida company name ONGRAPH TECHNOLOGIES PVT... Thankyou to so much sir for support and such a great Teaching...",
            "company": "ONGRAPH TECHNOLOGIES",
            "role": ""
        },
        {
            "student": "Shreyas Kasar",
            "msg": "Dear sir,I am Shreyas Kasar,one of your students from September 2022 to Nov 2022 devops batch, I want you tell you that I have got the opportunity as Jr Linux Admin at Plus91 Technologies, Pune. I want to say thank you for the guidance and training you have provided me,We both did it. As a non IT background it was difficult but not impossible so did 10hr/day practise during preparation and made it possible Thank you for the same sir..!!",
            "company": "Plus91 Technologies",
            "role": "Linux Admin"
        },
        {
            "student": "A.Sai Vishnu Vardhan",
            "msg": "Hi srikanth sir I got a job on Devops in Motivity labs Hyderabad sir on November 27 and joined from January 5 sir. Thanks for your classes",
            "company": "Motivity labs",
            "role": "Devops engineer"
        },
        {
            "student": "Srikanth M",
            "msg": "This is Srikanth your last batch student, I'm very glad to inform you that I got placed in Infosys with good package. I received the offer letter yesterday and date of joining on Nov 13. Your classes have helped me to crack the interview process I wanted to share with you about this, all This happened because of you, the way you thought us will remember topics forever thanks for your efforts and keep going never stop this will help alot of students to succeed in their life. Thanks you sir lots of love. Thanks and regards",
            "company": "Infosys",
            "role": ""
        },
        {
            "student": "Yahiya Afreed",
            "msg": "This is Afreed from digital nest AWS and Devops batch. I got the job, I don't know how to express, but this thanks is not just for the sake of saying, it's from my heart Thank you so much for you guidance sir,  without your guidance it's impossible. Thanks again sir, you're the best teacher out there in the market, I have never seen a person who teaches like you, you're simply awesome",
            "company": "",
            "role": ""
        },
        {
            "student": "Aswini",
            "msg": "I am one of your AWS devops student 2023 batch. I got selected as a Devops Engineer and today is my first day. I am very thankful for your marvelous teachings ....Without your teachings and suggestions, I might not able to crack interviews. I have never seen a teacher as well as mentor in my student career who will explain the concept from scratch to advanced stage with real time examples. The real time examples you have provided helped me alot to understand a tool or service in a proper way. I hope and wish, you should continue your tremendous teachings and pave paths for lot of students like me who are struggling for their careers......I don't have any words to explain how happy I am .....Once again THANK YOU SO MUCH SIR.",
            "company": "",
            "role": "Devops Engineer"
        },
        {
            "student": "Ashraf",
            "msg": "Learning here is a apportunity to have practical knowledge and it helps to build your career objectives",
            "company": "",
            "role": ""
        },
        {
            "student": "Lakshmanarao",
            "msg": "The training is very informative. the trainer has very good knowledge and he explained very neatly. I recommend.",
            "company": "",
            "role": ""
        },
        {
            "student": "Vijay",
            "msg": "Excellent they thought me in depth of Devops and with real time practical exposure provided by them helped me a lot in thank you Srikanth sir and cloudbots for making me from zero to hero with your I have got placed in good company and with good package",
            "company": "",
            "role": ""
        },
        {
            "student": "Sai",
            "msg": "ONE OF THE BEST INSTITUTE FOR DEVOPS TAUGHT BY MR. SRIKANTH",
            "company": "",
            "role": ""
        },
        {
            "student": "Akshay",
            "msg": "Thanks so much sir, Really it's a good session. Miss ur voice Sir, promise",
            "company": "",
              "role": ""
        }
    ]


    // Reference to the swiper-wrapper
const testimonialsWrapper = document.getElementById("testimonialsWrapper");

// Generate slides dynamically
successStories.forEach((item) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
         <blockquote>${item?.msg}</blockquote>
         <div class="quote-tail"></div>
        <p><b>${item?.student}</b><br/>
        ${item?.company} <br/> ${item?.role}
      
        </p>
       
    `;
    testimonialsWrapper.appendChild(slide);
});
