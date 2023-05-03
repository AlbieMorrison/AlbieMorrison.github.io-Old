(() => {
    type Position = [number, number];

    type DataBox = {
        name: string;
        desc?: string;
        pos?: Position;
        angle?: number;
        children?: DataBox[];
        drawn?: boolean;
        path?: string;
    };

    const VIOLIN: DataBox = {
        name: "Violin",
        desc: "Violin is the instrument I've played for the longest time; my first practice log is from March 3, 2015.<br><p>I have well over 1200 hours of play time.</p>",
        children: [
            {
                name: "Repertoire",
                desc: "I have played a variety of music. For the most part, it's been classical, but more recently I've played a bit more contemporary music, mostly with my siblings.",
                children: [
                    {
                        name: "Worship music",
                        desc: "I have played in the band at <a href=\"https://www.redeemerbible.church\" target=\"_blank\">Redeemer Bible Church</a> a few times, but mostly this has been playing through chord sheets, etc."
                    },
                    {
                        name: "Suzuki books",
                        desc: `I have played all of the songs in the Suzuki Violin books
                            <a href="https://www.alfred.com/suzuki-violin-school-volume-3/p/00-0148S/#contents" target="_blank">3</a>, 
                            <a href="https://www.alfred.com/suzuki-violin-school-volume-4/p/00-50106/#description_header" target="_blank">4</a>, 
                            <a href="https://www.alfred.com/suzuki-violin-school-volume-5/p/00-0152S/#contents" target="_blank">5</a>, and 
                            <a href="https://www.alfred.com/suzuki-violin-school-volume-6/p/00-0154S/#contents" target="_blank">6</a>.`
                    },
                    {
                        name: "Concertos",
                        desc: "I've played many concertos and other longer pieces, including Seitz, Vivaldi, and others. My favorites, though, have been Bach concertos. All of those are challenging to play yet beautiful when done well."
                    },
                    {
                        name: "Etudes",
                        desc: "There are a variety of etude books that I've worked my way through;"
                    },
                    {
                        name: "Self-arranged music",
                        desc: "As shown in the Music arrangement node, I have arranged a variety of pieces and have played all of them that include a violin!"
                    }
                ]
            },
            {
                name: "History",
                desc: `From the first time I was given the choice to play an instrument, violin was one I liked the sound of. (I had also heard it is one of the harder instruments to learn well, and I love a good challenge)!<br>
                    <p>My first (1/2 size) violin came from a friend as a loan, until I outgrew it. Eventually I grew into a full-size violin, and bought one for $200 at <a href="https://www.paigesmusic.com/paiges/run?id=6" target="_blank">Paige's Music</a>.
                    That was a bargain deal, as it was a $2000 violin gotten for a tenth of the price, just because of some small cosmetic defects.</p>`
            }
        ]
    };
    const FAMILY: DataBox = {
        name: "Family",
        desc: "People who are always around me. Better learn to like them!",
        children: [
            {
                name: "Siblings",
                desc: "I am the oldest of 6 siblings; there are 4 boys and 2 girls, and get this: none of us are confused about that. Sadly that's getting less and less common in today's world."
            },
            {
                name: "Basic info",
                desc: `The Morrison household consists of 6 (sometimes squirrely) children and our parents.<br>
                    <p>We live in Franklin, IN, where you can get all four seasons in a single day.</p>`
            },
            {
                name: "Parents",
                desc: "We have two wonderful parents who care for us just the way God intended. He couldn't have picked better when he put us all in the same family."
            }
        ]
    };
    const SCHOOL: DataBox = {
        name: "School",
        desc: "All that learning stuff.",
        children: [
            {
                name: "Where I'm going",
                desc: "What are the next steps in my education? I always want to learn more.",
                children: [
                    {
                        name: "College?",
                        desc: `Attending an institution of higher education is something I'd love to do; since I always want to keep learning, going somewhere meant solely for that purpose for an extended period of time would be an amazing opportunity.<br>
                            <p>If I can go to college, it'll probably be at Cedarville University in Ohio. I will major in Computer Engineering and minor in Bible and possibly Entrepreneurship.</p>`
                    },
                    {
                        name: "No college?",
                        desc: "Even if I can't afford college, that doesn't mean I will stop learning! One of my dreams is to be entrepreneurial and own my own business. If you want to learn more about that, check out the Work node."
                    }
                ]
            },
            {
                name: "Where I've been",
                desc: "I was home educated from birth through high school.",
                children: [
                    {
                        name: "Early education",
                        desc: `I've always loved math, science, and pretty much anything technical. Since I learned to read when I was 3, I haven't stopped reading books, papers, instructions, documentation, encyclopedias, and many other things.<br>
                            <p>During my younger years, my parents also put a lot of work into making sure I learned everything I needed to, even the stuff I didn't like (writing, for example).<br>
                            That work has paid off, and now I like almost every subject (with the exception of broad history courses, although I still like specific ones).</p>`,
                        children: [
                            {
                                name: "Scratch",
                                desc: "One of the more nerdy things I did when I was younger was coding projects on Scratch, which is a visual, block-based coding tool made by MIT.",
                                path: "https://scratch.mit.edu/"
                            },
                            {
                                name: "Algebra",
                                desc: "I told you I've always been math-oriented...well, here's the proof: I started Algebra 1 (using the excellent Math-U-See curriculum) when I was 11."
                            }
                        ]
                    },
                    {
                        name: "High school",
                        desc: "Part of my education at home involving \"high school-level\" courses.",
                        children: [
                            {
                                name: "Language",
                                desc: `I've gone through several language arts courses, including Wordsmith Craftsman, IEW's Student Writing Intensive, and their Windows to the World curriculum.<br>
                                    <p>Along with that, I've had the pleasure of reading many great classic books like The Count of Monte Cristo, War and Peace, the Iliad and the Odyssey, etc.</p>
                                    <p>Overall, the language courses I've taken have greatly improved my ability to communicate through words on a page (or screen, as the case may be), even if writing isn't my strongest subject.</p>`
                            },
                            {
                                name: "Math",
                                desc: `As you can probably tell, math is one of my favorites. I've completed several levels of algebra, as well as geometry, trigonometry, and calculus A (all through Math-U-See).<br>
                                    <p>Regardless of what many people say, math is one of the most fun subjects for me; it's the language of order that helps us describe how God made the world in an orderly way.</p>`
                            },
                            {
                                name: "LOGIC",
                                desc: "As a family, we participate in this AMAZING speech and debate club. For any homeschooler who hasn't tried speech and debate, it's great.",
                                path: "https://www.homeschool-life.com/1298/",
                                children: [
                                    {
                                        name: "Debate",
                                        desc: `This is the primary activity I participated in during my time with LOGIC. Without a doubt, it's one of the best activities I've ever participated in.<br>
                                            <p>Debate involves research, study, competition, speaking skills, and thinking on your feet.</p>
                                            <p>It teaches you some of the most useful skills that you can have, ones that I will use just about every day of my life.</p>`
                                    },
                                    {
                                        name: "Speech",
                                        desc: "I participated in a variety of speech events, including limited preparation events and events where I delivered memorized speeches. Learning how to speak well in a variety of situations, in front of an audience, is an important skill that is disappearing in America."
                                    }
                                ]
                            },
                            {
                                name: "Sciences",
                                desc: "Biology, Chemistry, Anatomy and Physiology, Botany, Fizzicks; they are all ways to help us describe God's creation, and that's what makes them enjoyable."
                            },
                            {
                                name: "...and more",
                                desc: "What I have put here is just a small selection of the many things I have learned about throughout my education, which has given me the capabilities I have now."
                            }
                        ]
                    }
                ]
            }
        ]
    };
    const FRIENDS: DataBox = {
        name: "Friends",
        desc: "N/A",
        // desc: "People who I choose to spend time around; a bit of a different relationship than family.",
        path: "/none.html"
    };
    const PROJECTS: DataBox = {
        name: "Projects/Hobbies",
        desc: "Stuff I like doing.",
        children: [
            {
                name: "Digital",
                desc: "Highlight projects in the world of 1s and 0s."
            },
            {
                name: "Physical",
                desc: "A few highlights of my projects that are made in reality.",
                children: [
                    // 2021 Bow Build
                    {
                        name: "2021 Bow Build",
                        desc: "This was me deciding to use 4-H as an excuse to do something I've always wanted to do: build a shooting bow from scratch.",
                        children: [
                            {
                                name: "Photos",
                                desc: "Some pictures of the process.",
                                children: [
                                    {
                                        name: "The board",
                                        desc: `<img src="img/bow/stave_0.jpg" alt="Bow stave" width="256" height="256"><br>
                                            <img src="img/bow/stave_1.jpg" alt="Bow stave end view" width="256" height="256">`
                                    },
                                    {
                                        name: "Jigs",
                                        desc: `<img src="img/bow/jig_building.jpg" alt="Drilling to make jig" width="256" height="256">`
                                    },
                                    {
                                        name: "Shaving wood",
                                        desc: `<img src="img/bow/shaving_0.jpg" alt="Shaving wood" width="256" height="256">`
                                    },
                                    {
                                        name: "Tips/riser",
                                        desc: `<img src="img/bow/tip_0.jpg" alt="Aluminum tip" width="256" height="256"><br>
                                            Look carefully to see the aluminum riser bonded onto the other side of the bow.<br>
                                            <img src="img/bow/riser_0.jpg" alt="Aluminum riser" width="256" height="256">`
                                    },
                                    {
                                        name: "Tillering",
                                        desc: `<img src="img/bow/tillering_0.jpg" alt="Tillering side view" width="256" height="256"><br>
                                            <img src="img/bow/tillering_1.jpg" alt="Tillering stick stood up" width="256" height="256"><br>
                                            <img src="img/bow/tillering_2.jpg" alt="Tillering full view" width="256" height="256">`
                                    }
                                ]
                            },
                            {
                                name: "Info",
                                desc: "Basic info about the bow build.",
                                children: [
                                    {
                                        name: "Costs",
                                        desc: `<ul><li>Wood bow stave: $35.90, including shipping and tax.</li>
                                            <li>Aluminum for tip overlays and riser: free to me (from our company's stock), but I used ~$6.99 of aluminum stock.</li>
                                            <li>B55 Bowstring material: $16 per spool, and one spool can make 10-15 bowstrings.</li>
                                            <li>Bowstring "serving" thread and jig: $16.99</li>
                                            <li>Wood for tillering tree and bowstring jig: free to me; these were just scraps of lumber we had laying around.</li></ul><br>
                                            <p>So overall to build the bow, it was somewhere on the order of $60 for this whole bow, plus a bit of costs for the various jigs, fixtures, and tools used during the process.</p>`
                                    },
                                    {
                                        name: "Time",
                                        desc: "All told, including research, decisions about things like what wood to use and the riser and tip material, I spent close to 70 hours on this project. It's not something you can just pick up and do in a weekend!"
                                    },
                                    {
                                        name: "Result",
                                        desc: `The normal target for a bow draw is 28". My bow got to 27" before breaking less than 45 minutes away from being able to actually shoot it.
                                            <p>A few hours before, I had predicted that if it broke, it would break at a slightly thin spot near the end of the upper limb. It broke exactly where I said it would.</p>
                                            <p>In spite of the bow breaking, it was still enough to win Reserve Champion and 1st place in the 4-H shooting sports category!</p>`
                                    }
                                ]
                            },
                            {
                                name: "Process",
                                desc: "How do you go about building a bow?",
                                children: [
                                    {
                                        name: "Summary",
                                        desc: `January - February: Research and decisions about materials, sources, technique, etc.
                                            <p>March: Ordered bow stave (hickory board) from Ringing Rocks Archery; decided on bowstring material, ordered B55 string material and serving thread with jig; research on bowstring making, decided on endless loop type of string; fabricated bowstring jig of my own design; cut angles to bring wood to rough shape.</p>
                                            <p>April: Sanded bow to round edges; decided on tip overlay and riser material (aluminum); fabricated tip overlays and riser; decided on regular Gorilla epoxy for gluing tips and riser on; bonded tip overlays and riser to bow; started tillering.</p>
                                            <p>May: 25+ hours of tillering</p>
                                            <p>June: Tillering to one inch off target draw length; within one hour of shooting the bow breaks.</p>`
                                    },
                                    {
                                        name: "Details",
                                        desc: `Late March:
                                            <ul>
                                                <li>Cut angles on main wood to 1/2" x 3/16" tips and a ~8" long handle. Never cut the back of the bow (that is, the side that faces away from you when shooting)!</li>
                                            </ul>
                                            <p>April 9:
                                            <ul>
                                                <li>Sanded belly edge of bow to round shape, variable radius curve to riser area</li>
                                                <li>What glue to use for tip overlays and riser?
                                                <ul>
                                                    <li>EA-40 bow glue is ideal, but unavailable</li>
                                                    <li>E6000: good, might be too flexible</li>
                                                    <li>Do we have regular epoxy? Ask Dad</li>
                                                    <li>Wood glue - doesn't work on aluminum</li>
                                                </ul></li>
                                                <li>What material for tip overlays and riser?
                                                <ul>
                                                    <li>Riser purpose is to stop shock from traveling through the handle of the bow (metal could be even better than traditional hardwood)</li>
                                                    <li>Purpose of tip overlays is to keep the string from wearing into the tips of the actual bow and to keep the tips together; metal could be good for this too</li>
                                                    <li>Hardwood riser and phenolic overlays would be ideal, but I have no phenolic</li>
                                                    <li>Aluminum catches eye for riser, decided on aluminum riser</li>
                                                    <li>Asked experienced bowyers on Reddit about aluminum for tips as well; answer of yes</li>
                                                </ul></li>
                                                <li>Decided on standard Gorilla epoxy for gluing tip overlays and riser on, under advice of Dad</li>
                                                <li>Cut riser and tips and sanded sharp edges</li>
                                                <li>Glued on tips and riser to wood (epoxy is slippery and hard to keep clamped in one place!)</li>
                                            </ul></p>
                                            <p>June 18:
                                            <ul>
                                                <li>Tillering - got to 45# at 27"</li>
                                                <li>One inch off target</li>
                                                <li>No remaining wood removal, only pulling the bow to the next notch and waiting for thirty minutes</li>
                                                <li>Bow breaks!</li>
                                                <li>Breaks in the thin spot that I predicted it would break in if it did break</li>
                                            </ul></p>`,
                                        children: [
                                            {
                                                name: "Jig building",
                                                desc: `You need a jig to make bowstrings (which are twisted out of up to 20 strands of bowstring material, then bound together with small thread called "serving" thread).
                                                    <p>After deciding on the type of string to use, I had to build a jig to be able to make that kind of string in a custom length and number of strands. All of the available jigs for sale were way overpriced for what they were, so I decided to build my own.</p>
                                                    <p>The jig is made out of 2x6 lumber, 1/4" steel bar, some 3/8" bolts, washers, and nuts, and drywall screws.</p>
                                                    <p>I researched necessary string lengths and regular jigs, then drew up some plans and fabricated my own jig out of materials we had around on the property.<br>
                                                    Now I can make pretty much any length of bowstring that a normal human could ever need!</p>`
                                            },
                                            {
                                                name: "Starting out",
                                                desc: `I started with a 70" x 1.5", 0.875" thick hickory board. I decided on hickory because it has a strong reputation among the worldwide bowyer community for being nearly bombproof.
                                                    <p>The stave was ordered online off of Ringing Rocks Archery for $35.90 including shipping and came in mid to late March. When the board came, it looked to be a near perfect bow stave, with straight grain, little to no runoff, and very square edges all around.</p>
                                                    <p>The first cuts were done in late March with a DoAll bandsaw in our shop, and they were my first cuts ever made on a bandsaw (another skill learned!). I cut angles from 4 inches on either side of the center to the ends, angled in to make the board 3/8” by 5/16” on the ends. The thinner direction is the way the bow bends.</p>`
                                            },
                                            {
                                                name: "Bowstring",
                                                desc: `Making a bowstring is a very involved process that takes concentration, consistency, and a good eye. I used a great tutorial for the actual fabrication of the string that can be found at the link this node points to.
                                                    <p>For this bow, I needed to be able to have custom length strings, and so I decided to use B55 Dacron material for the strings, and a standard nylon serving thread to keep the string together and to keep it from wearing in important spots.</p>
                                                    <p>The next step in having strings to use was picking a type of string to use. There are several different types of string, but the main two are called Flemish Twist and Endless Loop. I decided on endless loop type because it gives better shooting velocity and is slightly easier to build a jig for.</p>`,
                                                path: "https://sensiblesurvival.org/2015/05/27/make-a-continuous-loop-bowstring-part-1/"
                                            },
                                            {
                                                name: "Tillering",
                                                desc: `Tillering is the main grunt work of building a bow. You have to bend the bow a little more each time, then shave off small amounts of wood to even out the curve of the back of the bow, then bend it again a little more, etc.
                                                    <p>It took well over 30 hours of tillering alone to get to the point where the bow broke. Tillering is fun but very monotonous and gets boring after a long time.</p>
                                                    <p>It's very important that you get the tiller near perfect otherwise it is very easy to break a bow, even when using hickory wood.</p>`
                                            },
                                            {
                                                name: "Tips/riser",
                                                desc: `The tip overlays are meant to protect the tips from wearing out by the string rubbing on the wood of the actual bow. The riser is meant for stopping shock from traveling through the handle of the bow.
                                                    <p>Aluminum is a good material for both of these, as it's strong but light, so I made tip overlays by cutting out small rectangles of aluminum from a sheet, then gluing them two layers thick with Gorilla Epoxy onto the tips of the actual bow.</p>
                                                    <p>For the riser, I took a thick piece of aluminum bar and cut the ends of it to 45 degree angles, then sanded it to smooth the sharp edges where it was cut. Then I bonded it to the handle with the same epoxy.</p>`
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: "Lessons learned",
                                desc: `<ul><li>Don't hold too high of an expectation, especially on a first try doing a hard and complicated project.</li>
                                    <li>Don't let it get you down when you fail at something! Just put it down and try again later.</li>
                                    <li>Sometimes what looks like a failure just ends up being a better story.</li>
                                    <li>Every bowyer breaks bows!</li></ul>`
                            }
                        ]
                    }
                ]
            }
        ]
    };
    const ART: DataBox = {
        name: "Art",
        desc: "I'm living proof that you can nerd out about art too!",
        children: [
            {
                name: "Music",
                desc: "The musical/performing arts are some of my personal favorites.<br><p>I would love to learn many more instruments than I have time to play.</p>",
                children: [
                    {
                        name: "Piano",
                        desc: "I have always been exposed to piano playing, but only started doing real practice near the end of 2022."
                    },
                    VIOLIN,
                    {
                        name: "Music arrangement",
                        desc: "Another musical art I engage in is arranging songs.",
                        children: [
                            {
                                name: "How do I arrange?",
                                desc: "Through a mixture of listening, analyzing, and a great free software.",
                                children: [
                                    {
                                        name: "Software",
                                        desc: "To arrange music, I use a free software called Musescore, which I've found to be excellent and fairly easy to use.",
                                        path: "https://musescore.org/en"
                                    },
                                    {
                                        name: "Listening",
                                        desc: "For me, main part of arranging any piece of music has always been listening to it repeatedly, slowing it down, and working a few notes at a time."
                                    }
                                ]
                            },
                            {
                                name: "Pieces",
                                desc: "I have arranged several musical pieces, mostly from The Legend of Zelda: Breath of the Wild (a video game).",
                                children: [
                                    {
                                        name: "BOTW",
                                        desc: `Here is a sampling of the songs from Breath of the Wild that I have arranged:
                                            <ul><li><a href="./resources/Attack_on_Vah_Medoh.pdf" target="_blank">Attack on Vah Medoh</a></li>
                                            <li><a href="./resources/Calamity_Ganon_Medley.pdf" target="_blank">Calamity Ganon (Medley)</a></li>
                                            <li><a href="./resources/Dark_Beast_Ganon_Medley.pdf" target="_blank">Dark Beast Ganon (Medley)</a></li>
                                            <li><a href="./resources/Do_You_Remember.pdf" target="_blank">Do You Remember</a></li>
                                            <li><a href="./resources/Epilogue.pdf" target="_blank">Epilogue</a></li>
                                            <li><a href="./resources/Guardian_Scout_Battle_(Shrine_Battle).pdf" target="_blank">Guardian Scout Battle (Shrine Battle)</a></li>
                                            <li><a href="./resources/Molduga_Battle.pdf" target="_blank">Molduga Battle</a></li></ul>`
                                    },
                                    {
                                        name: "Other",
                                        desc: "I have also arranged a few other songs like Dance of the Sugar Plum Fairy from the Nutcracker."
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "Origami",
                desc: `Paper folding; this is another thing I've done on and off throughout the years.`,
                children: [
                    {
                        name: "Roses",
                        desc: `The latest thing I have enjoyed folding is roses:<br>
                            <img src="./img/origami/roses_top.png" alt="Origami Roses" width="256" height="256">`
                    }
                ]
            }
        ]
    };
    const WORK: DataBox = {
        name: "Work",
        desc: "I have been employed by <a href=\"https://enablingflight.com/\" target=\"_blank\">Streamline Designs, LLC</a> (the family business) since May of 2021.",
        children: [
            {
                name: "Where I work",
                desc: "Streamline Designs is headquartered on the back of our property, so my commute is only about 80 meters!"
            },
            {
                name: "What I do",
                desc: `At work, I do a variety of things from firmware and integration to hardware assembly to design.<br>
                    <p>I work most on the <a href=\"https://enablingflight.com/unmanned-aircraft-systems/\" target=\"_blank\">drone building</a> side of the business.</p>`,
                children: [
                    {
                        name: "Software/Firmware",
                        desc: "There are a variety of things I do at SD that involve firmware, such as a communications and message translation hub inside our drones and telemetry for the radio controller so the pilot knows what the drone is doing."
                    },
                    {
                        name: "Hardware",
                        desc: "One of the activities I often work at is fabrication and assembly of drones, parts, or tools for process improvement. It's a great feeling when you design and build a tool that makes a process faster for everyone."
                    },
                    {
                        name: "Design/CAD",
                        desc: "From fixing customer CAD models to designing drone parts, the process of creating models that are well-built and work is an interesting task that I frequently engage in at work."
                    }
                ]
            }
        ]
    };
    const ABOUT_ME: DataBox = {
        name: "About me",
        desc: "Some more general stuff about me.",
        children: [
            {
                name: "Religion",
                desc: "I am a Jesus follower. I'd love to tell you more about this, just get in touch with me via Discord or email!"
            },
            {
                name: "Contact",
                desc: "These are some ways you can get in touch with me!",
                children: [
                    {
                        name: "Email",
                        desc: "me@albiemorrison.com",
                        path: "mailto:me@albiemorrison.com"
                    },
                    {
                        name: "Discord",
                        desc: "AlbieMorrison#5416"
                    }
                ]
            },
            {
                name: "Learning",
                desc: `Basically, I have a serious hunger for learning that I've never yet managed to satisfy.<br>
                    <p>I'm probably one of the most nerdy people you'll ever meet...once I get excited about something, I tend to dig into it and try to learn everything I can about it...that means I'm always busy with something!</p>`
            },
            {
                name: "Politics",
                desc: `As Ronald Reagan said, \"Government is not the solution to our problem, government is the problem.\"<br>
                    <p>I agree with that in the vast majority of cases. In terms of political standing, I lean toward being conservative on most issues.</p>
                    <p>Either way, politics isn't the most important issue to be talking about. Go look at a different node.</p>`
            }
        ]
    };
    const DATA: DataBox[] = [
        {
            name: "Albie Morrison",
            desc: "That's me!",
            children: [
                PROJECTS,
                FRIENDS,
                SCHOOL,
                WORK,
                ABOUT_ME,
                ART,
                FAMILY
            ]
        }
    ];
    const distBetweenNodes = 375;
    const levels = 7;

    let canvas: HTMLCanvasElement = document.getElementById("main_canvas") as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
    let container: HTMLDivElement = document.getElementById("container") as HTMLDivElement;

    var halfX = canvas.width / 2;
    var halfY = canvas.height / 2;
    var mouseX: number = halfX,
        mouseY: number = halfY;
    var startMovement = false;
    var boxOpen: boolean = false;
    var framesWithBoxOpen: number = 0;
    // var reducedMotion: boolean = false;

    function centerCoords(x: number, y: number): Position {
        return [
            Math.round(x + halfX),
            Math.round(y + halfY)
        ];
    }

    function drawCrosses(xOffset: number = 0, yOffset: number = 0) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                ctx.save();
                ctx.translate(canvas.width / 4 * j + xOffset, canvas.height / 4 * i + yOffset);
                ctx.beginPath();
                ctx.moveTo(-9, 0);
                ctx.lineTo(9, 0);
                ctx.moveTo(0, -9);
                ctx.lineTo(0, 9);
                ctx.stroke();
                ctx.restore();
            }
        }
    }

    function redraw() {
        // if (!reducedMotion) {
        if (boxOpen) {
            framesWithBoxOpen++;
        } else {
            framesWithBoxOpen = 1;
        }
        let xOffset = mouseX - canvas.width / 2;
        let yOffset = mouseY - canvas.height / 2;
        let curMouseDist = Math.hypot(xOffset, yOffset);
        let moveSpeed = framesWithBoxOpen < 20 ? Math.min(Math.max((curMouseDist - 100) / 70, 0), 5) / (framesWithBoxOpen / 2) : 0;
        let moveDir = Math.atan2(yOffset, xOffset);

        let curDist = Math.hypot(canvas.width / 2 - halfX, canvas.height / 2 - halfY);
        let dx = -Math.cos(moveDir) * moveSpeed;
        let dy = -Math.sin(moveDir) * moveSpeed;
        let afterDist = Math.hypot(canvas.width / 2 - halfX - dx, canvas.height / 2 - halfY - dy);
        if (afterDist < curDist) {
            halfX += dx;
            halfY += dy;
            (document.querySelectorAll("div.box") as NodeListOf<HTMLDivElement>).forEach((el) => {
                el.style.left = (Number(el.style.left.slice(0, -2)) + dx) + "px";
                el.style.top = (Number(el.style.top.slice(0, -2)) + dy) + "px";
            });
        } else if (afterDist < distBetweenNodes * 0.8 * levels) {
            let scale = (1.1 - afterDist / (distBetweenNodes * 0.9 * levels));
            dx *= scale;
            dy *= scale;
            halfX += dx;
            halfY += dy;
            (document.querySelectorAll("div.box") as NodeListOf<HTMLDivElement>).forEach((el) => {
                el.style.left = (Number(el.style.left.slice(0, -2)) + dx) + "px";
                el.style.top = (Number(el.style.top.slice(0, -2)) + dy) + "px";
            });
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawCrosses(xOffset * -0.02, yOffset * -0.02);
        drawBoxes(DATA[0]?.children!, 0, 0, [undefined, undefined], undefined, undefined, undefined, 12, 1);
        requestAnimationFrame(redraw);
        // }
    }

    function resizeCanvas() {
        let oldHalfX = halfX;
        let oldHalfY = halfY;
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        halfX = canvas.width / 2;
        halfY = canvas.height / 2;
        mouseX = halfX;
        mouseY = halfY;
        startMovement = false;
        (document.querySelectorAll("div.box") as NodeListOf<HTMLDivElement>).forEach((el) => {
            el.style.left = (Number(el.style.left.slice(0, -2)) + halfX - oldHalfX) + "px";
            el.style.top = (Number(el.style.top.slice(0, -2)) + halfY - oldHalfY) + "px";
        });
    }

    function mouseMove(e: MouseEvent) {
        if (startMovement) {
            mouseX = e.x;
            mouseY = e.y;
        } else {
            if (Math.hypot(canvas.width / 2 - e.x, canvas.height / 2 - e.y) < 300) {
                startMovement = true;
            }
        }
    }

    function expandDescBox(div: HTMLDivElement) {
        boxOpen = true;
        div.style.zIndex = "15";
        let name = div.querySelector("span.name") as HTMLSpanElement;
        name?.classList.remove("collapsed");
        // @ts-expect-error
        name.style.fontSize = null;
        (div.querySelector("span.desc") as HTMLSpanElement).style.display = "inline-block";
    }

    function collapseDescBox(div: HTMLDivElement) {
        boxOpen = false;
        div.style.zIndex = "unset";
        let name = div.querySelector("span.name") as HTMLSpanElement;
        name?.classList.add("collapsed");
        name?.dataset?.fontSize && (name.style.fontSize = name.dataset.fontSize);
        (div.querySelector("span.desc") as HTMLSpanElement).style.display = "none";
    }

    function addDescBox(box: DataBox, x: number, y: number, level: number = 0) {
        let div = document.createElement("div");
        let pos: Position = centerCoords(x, y);
        div.classList.add("box");
        div.onmouseenter = () => {
            expandDescBox(div);
        };
        div.onmouseleave = () => {
            collapseDescBox(div);
        }
        let name = document.createElement("span");
        name.classList.add("name", "collapsed");
        name.dataset.fontSize = Math.max(32 - level * 4, 16) + "px";
        name?.dataset?.fontSize && (name.style.fontSize = name.dataset.fontSize);
        name.innerHTML = box.name.replaceAll(" ", "&nbsp;");
        let desc = document.createElement("span");
        desc.classList.add("desc");
        desc.innerHTML = box?.desc ?? "";
        if (box.path !== undefined) {
            let a = document.createElement("a");
            a.href = box.path.startsWith("/")
                ? window.location.href.substring(0, window.location.href.lastIndexOf("/")) + box.path
                : box.path;
            a.target = box.path.startsWith("/")
                ? "_self"
                : "_blank";
            let tip = document.createElement("span");
            tip.classList.add("tip");
            tip.innerText = "Click for more information";
            desc.append(document.createElement("br"), tip);
            a.append(name, document.createElement("br"), desc);
            div.append(a);
        } else {
            div.append(name, document.createElement("br"), desc);
        }
        div.style.left = pos[0] + "px";
        div.style.top = pos[1] + "px";
        container.append(div);
    }

    function drawBoxes(boxes: DataBox[], startX: number, startY: number, aunts: [DataBox?, DataBox?],
        dist: number = distBetweenNodes, prevAngle?: number, prevBoxAngle?: number,
        lineWidth: number = 2, level: number = 0) {
        let numBoxes = boxes.length;
        ctx.strokeStyle = "black";
        let cousinScaleFac: number = 1 + (aunts[0]?.children !== undefined ? 0 : 0.25) + (aunts[1]?.children !== undefined ? 0 : 0.25);
        for (let i = 0; i < numBoxes; i++) {
            ctx.lineWidth = lineWidth;
            let angle: number;
            let thisDist = dist + (i % 2 === 0 ? dist * 0.09 : -dist * 0.09);
            level > 1 && numBoxes > 3 && (thisDist *= 1.4);
            let thisAngle: number;
            if (prevAngle !== undefined && prevBoxAngle) {
                angle = numBoxes > 4
                    ? prevAngle - 1 * cousinScaleFac * prevBoxAngle + (2 * cousinScaleFac * prevBoxAngle / (numBoxes - 1)) * i
                    : numBoxes > 2
                        ? prevAngle - 0.6 * cousinScaleFac * prevBoxAngle + (1.2 * cousinScaleFac * prevBoxAngle / (numBoxes - 1)) * i
                        : numBoxes > 1
                            ? prevAngle - 0.45 * cousinScaleFac * prevBoxAngle + (0.9 * cousinScaleFac * prevBoxAngle / (numBoxes - 1)) * i
                            : prevAngle - (boxes[i].name.length % 2 == 0 ? -0.25 : 0.25);
                if (numBoxes > 2) {
                    thisAngle = (1.4 * prevBoxAngle / (numBoxes - 1));
                } else if (numBoxes > 1) {
                    thisAngle = (0.8 * prevBoxAngle / (numBoxes - 1));
                } else {
                    thisAngle = prevBoxAngle * 1.1;
                }
                // if (!(boxes[i - 1]?.children || boxes[i + 1]?.children)) {
                //     thisAngle *= 2;
                // }
                boxes[i]?.children !== undefined && (angle += ((boxes[i - 1]?.children?.length ?? 0) - (boxes[i + 1]?.children?.length ?? 0)) * 0.04);
            } else {
                angle = (2 * Math.PI / numBoxes) * i - Math.PI / numBoxes / 2;
                thisAngle = 2 * Math.PI / numBoxes;
            }
            let pos: Position = [
                Math.cos(angle) * thisDist + startX,
                Math.sin(angle) * thisDist + startY
            ];
            ctx.beginPath();
            ctx.moveTo(...centerCoords(startX, startY));
            ctx.lineTo(...centerCoords(...pos));
            ctx.stroke();
            if (!boxes[i].drawn) {
                addDescBox(boxes[i], ...pos, level);
                boxes[i].drawn = true;
            }
            if (boxes[i]?.children !== undefined) {
                drawBoxes(boxes[i].children!, ...pos, [
                        boxes[i - 1] ?? aunts[0]?.children?.[(aunts[0]?.children?.length ?? 0) - 1],
                        boxes[i + 1] ?? aunts[1]?.children?.[0]
                    ], distBetweenNodes * 0.9, angle, thisAngle, Math.max(Math.floor(lineWidth * 0.7), 2), level + 1);
            }
        }
    }

    addDescBox(DATA[0], 0, 0);
    window.onresize = resizeCanvas;
    window.addEventListener("mousemove", mouseMove);
    document.getElementById("recenter")!.onclick = resizeCanvas;
    // let reducedMotionBox = document.getElementById("reduced_motion")! as HTMLInputElement;
    // reducedMotionBox.onchange = () => {
    //     if (reducedMotionBox.checked) {
    //         reducedMotion = true;
    //         container.style.overflow = "scroll";
    //         startMovement = false;
    //         resizeCanvas();
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         drawCrosses();
    //         drawBoxes(DATA[0]?.children!, 0, 0, undefined, undefined, undefined, 12);
    //     } else {
    //         reducedMotion = false;
    //         container.style.overflow = "hidden";
    //         startMovement = false;
    //         resizeCanvas();
    //         redraw();
    //     }
    // };
    resizeCanvas();
    redraw();
})();
