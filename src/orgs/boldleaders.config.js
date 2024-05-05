export default {
	label: "boldleaders",
	html: `<img width="100px" src="https://www.boldleaders.org/wp-content/uploads/2019/07/logo-B-Final-C.png"></img>`,
	url: "https://boldleaders.org",
	appname: `🧬 Elementals`,
	menu: [
		{
			opened: true,
			label: `🧬 Elementals`,
			menu: [
				{
					label: "About",
					path: "BoldLeaders/Elementals",
				},
				{
					opened: true,
					label: `Resources 101`,
					menu: [
						{ label: "📚 Study", url: "" },
						{
							opened: true,
							label: "🎓 Learn",
							menu: [
								{
									opened: true,
									label: "Elementals",
									menu: [
										{
											label: "Part 1",
											path: "BoldLeaders/Elementals/Resources101/Learn/Elementals/Part1",
										},
										{
											label: "Part 2",
											path: "BoldLeaders/Elementals/Resources101/Learn/Elementals/Part2",
										},
									],
								},
								{
									label: "Compounds",
									path: "BoldLeaders/Elementals/Resources101/Learn/Compounds",
								},
							],
						},
						{
							label: "⚡ Activities",
							menu: [
								{
									label: "Restoring Trust Exercise",
									path: "BoldLeaders/Elementals/Resources101/Act/RestoringTrust",
								},
							],
						},
						{
							label: "💬 Discuss",
						},
					],
				},
			],
		},
	],
	paths: [
		{
			path: "/BoldLeaders/Elementals/Resources101/Learn/Elementals/Part1",
			title: "Learn the Elementals - Part 1",
			summary: `
			<p> Skip to <a href="/BoldLeaders/Elementals/Resources101/Learn/Elementals/Part2">part 2</a></p>
			Get ready to learn something new in an interactive way! This module will ask you questions and provide hints until you've mastered the answers. The questions are mixed up, so stay on your toes! With each hint, you'll get closer to that 'aha!' moment. Spelling and punctuation count, so be precise. Let's dive in and expand your brain power together - it'll be a fun, bite-sized learning adventure!`,
			qa: [
				{
					q: "What elemental human resource allows us to perceive the world around us through sight, smell, hearing, taste, and touch?",
					a: "Five Senses",
				},
				{
					q: "Which elemental human resource includes survival mechanisms such as fear, hunger, and procreation?",
					a: "Instincts",
				},
				{
					q: "Name an elemental human resource that encompasses feelings such as happiness, sadness, anger, and contentment.",
					a: "Emotions",
				},
				{
					q: "What elemental human resource involves the use of vocalization, whether through speech, cry, or shout?",
					a: "Voice",
				},
				{
					q: "What elemental human resources are involved in perceiving the world, forming emotional bonds, and effective communication?",
					a: "Senses, Relationship, Communication",
				},
				{
					q: "Name the elemental resources crucial for survival instincts, memory formation, and physical interaction.",
					a: "Instincts, Memory, Touch",
				},
				{
					q: "Which elemental human resources contribute to experiencing various emotions, observing surroundings, and engaging in cooperative activities?",
					a: "Emotions, Observation, Cooperation",
				},

				{
					q: "Which elemental human resource refers to the connections and bonds we form with others and the world around us?",
					a: "Relationship",
				},
				{
					q: "Name an elemental human resource that involves actively engaging in activities, events, or experiences.",
					a: "Participation",
				},
				{
					q: "What elemental resource allows us to move our bodies through space and interact with our environment?",
					a: "Movement",
				},
			],
		},
		{
			path: "/BoldLeaders/Elementals/Resources101/Learn/Elementals/Part2",
			title: "Learn the Elementals - Part 2",
			summary: `
			<p> Back to <a href="/BoldLeaders/Elementals/Resources101/Learn/Elementals/Part1">part 1</a></p>
			Get ready to learn something new in an interactive way! This module will ask you questions and provide hints until you've mastered the answers. The questions are mixed up, so stay on your toes! With each hint, you'll get closer to that 'aha!' moment. Spelling and punctuation count, so be precise. Let's dive in and expand your brain power together - it'll be a fun, bite-sized learning adventure!

			`,

			qa: [
				{
					q: "Which elemental human resource involves the exchange of information and ideas through language, gestures, or other means?",
					a: "Communication",
				},
				{
					q: "Name an elemental human resource that allows us to retain and recall past experiences, information, and knowledge.",
					a: "Memory",
				},
				{
					q: "What elemental human resource involves imitating the actions, behaviors, or expressions of others?",
					a: "Mimicry",
				},
				{
					q: "Which elemental human resource entails working together with others toward a common goal or purpose?",
					a: "Cooperation",
				},
				{
					q: "Name an elemental human resource that involves keenly observing and perceiving details in our surroundings.",
					a: "Observation",
				},
				{
					q: "What elemental resource involves the shedding of emotional tears as a means of communication and emotional release?",
					a: "Tears",
				},
				{
					q: "Which elemental human resource entails the expression of joy, amusement, and humor?",
					a: "Laughter",
				},
				{
					q: "Name an elemental human resource that involves physical contact and connection with others and our environment.",
					a: "Touch",
				},

				{
					q: "What elemental resources are essential for physical movement, sensory perception, and cognitive development?",
					a: "Movement, Senses, Memory",
				},
				{
					q: "Name the elemental resources involved in mimicry, understanding others' perspectives, and forming emotional bonds.",
					a: "Mimicry, Relationship, Emotions",
				},
			],
		},
		{
			path: "/BoldLeaders/Elementals/Resources101/Learn/Compounds",
			qa: [
				{
					q: "What compound arises from the active engagement with elemental human resources and involves the ability to overcome challenges and setbacks?",
					a: "Resilience: Cooperation, Emotions",
				},
				{
					q: "Name a compound that emerges from effective communication, collaboration, and understanding others' perspectives.",
					a: "Empathy: Communication, Relationship",
				},
				{
					q: "What compound results from the combination of curiosity, creativity, and imagination?",
					a: "Innovation: Curiosity, Creativity, Imagination",
				},
				{
					q: "Which compound involves the expression of joy, amusement, and positive social interaction?",
					a: "Humor: Emotions, Communication",
				},
				{
					q: "Name a compound that arises from the active engagement with observation, reflection, and critical thinking.",
					a: "Insight: Observation, Thinking",
				},
				{
					q: "What compound emerges from the combination of determination, perseverance, and tenacity?",
					a: "Grit: Determination, Persistence, Emotions",
				},
				{
					q: "Which compound involves the ability to appreciate beauty, wonder, and awe in the world?",
					a: "Awe: Wonder, Senses",
				},
				{
					q: "Name a compound that results from the combination of empathy, compassion, and understanding.",
					a: "Kindness: Empathy, Emotions",
				},
				{
					q: "What compound arises from the combination of humility, self-awareness, and openness?",
					a: "Vulnerability: Humility, Awareness",
				},
				{
					q: "Which compound involves the ability to adapt, innovate, and navigate challenges?",
					a: "Adaptability: Innovation, Creativity",
				},
			],
		},
		{
			path: "/BoldLeaders/Elementals/Resources101/Act/RestoringTrust",
			title: "Restoring Trust Exercise",
			summary: `
				Trust is vital for meaningful connections, and it takes authenticity, courage, and humility to restore it when it's shaken.

				In this process, you'll discover the power of being authentic, courageous, and humble. Authenticity means showing up as your true self, being genuine and transparent. Courage empowers you to face challenges and have difficult conversations. Humility reminds you to approach with an open mind and willingness to learn.

				Trust isn't built overnight. It requires time, effort, and commitment to authenticity, courage, and humility. Embrace this journey knowing that the rewards of a deeper connection are worth it.

				With authenticity, courage, and humility, let's begin rebuilding trust together.

				Be sure and keep notes after each step.  Journal about your thoughts, insights, and questions.  Every thing you share helps me understand and coach you better.
			`,
			steps: [
				{
					title: "Heartfelt Conversation",
					text: "Have a heartfelt conversation with your partner, actively listening to their concerns without interruption, and expressing empathy and understanding through Communication.",
				},
				{
					title: "Sincere Apology",
					text: "Offer a sincere apology to your partner, expressing remorse for any past actions or words that have caused hurt, and acknowledging their feelings with Emotions.",
				},
				{
					title: "Honest Disclosure",
					text: "Engage in honest disclosure by openly sharing your thoughts and feelings with your partner, fostering transparency and trust through Observation.",
				},
				{
					title: "Consistent Support",
					text: "Show consistent support for your partner throughout the day, actively engaging in activities together and demonstrating your commitment to the relationship with Participation.",
				},
				{
					title: "Empathetic Listening",
					text: "Practice empathetic listening by attentively listening to your partner's concerns, validating their emotions, and offering comfort and reassurance with Relationship.",
				},
				{
					title: "Forgiveness Exercise",
					text: "Engage in a forgiveness exercise with your partner, where you both express forgiveness for any past grievances, letting go of resentment and embracing compassion using Emotions.",
				},
				{
					title: "Collaborative Activity",
					text: "Participate in a collaborative activity together, such as cooking a meal, completing a puzzle, or taking a walk, fostering teamwork and strengthening your bond through Cooperation.",
				},
			],
		},
		{
			path: "/BoldLeaders/Elementals",
			title: "Elementals",
			html: `
			<img width="100%" src="https://www.boldleaders.org/wp-content/uploads/2019/12/The-Elementals.png"/>

	<div class="fusion-column-wrapper fusion-flex-column-wrapper-legacy" style="background-position: left top; background-repeat: no-repeat; background-size: cover; padding: 0px; min-height: 0px;"><style type="text/css"></style><div class="fusion-title title fusion-title-2 fusion-sep-none fusion-title-text fusion-title-size-three fusion-border-below-title" style="margin-top:50px;margin-right:0px;margin-bottom:0px;margin-left:0px;"><h3 class="title-heading-left fusion-responsive-typography-calculated" style="margin:0;--fontSize:30;line-height:1.2;"><span style="color: #0e488a;"><strong>The Elementals:</strong> </span>16 qualities of being human, <em>common to everyone</em>.&nbsp; Yet <strong>everyone</strong> has adapted to not using some of them, resulting in a gap or absence that is missed and notable.&nbsp; Using colorful cards with intriguing language and probing questions, users are drawn to the Elementals they are least familiar with and are encouraged to practice that ‘muscle’.&nbsp; An easy-to-use <strong>Companion Guid</strong>e provides further ideas, discussion questions and worksheets.&nbsp; <span style="color: #0e488a;"><strong>Use of the Elementals ignites actions that build self-agency and deepens essential social and emotional skills.</strong></span></h3></div><style type="text/css"></style><div class="fusion-title title fusion-title-3 fusion-sep-none fusion-title-center fusion-title-text fusion-title-size-three fusion-border-below-title" style="margin-top:15px;margin-right:0px;margin-bottom:31px;margin-left:0px;"><h3 class="title-heading-center fusion-responsive-typography-calculated" style="margin:0;--fontSize:30;line-height:1.5;"><p style="text-align: center;">Curious about how we got to this idea? <a href="https://prezi.com/jvk1tnqxic0h/elemental-human-resources-framework-intro/?token=63010596e2836a5239d981ad1135de1aa62d6b02599749ae4a1b317afe8a6e11&amp;utm_campaign=share&amp;utm_medium=copy" target="_blank" rel="noopener noreferrer"><span style="color: #0000ff;">Check out this short Prezi</span>.</a></p></h3></div><div class="fusion-clearfix"></div></div>

	copyright &copy; 2024 <a href="https://boldleaders.org/elementals" target="boldleaders">Boldleaders.org</a>
	`,
		},
		{
			path: "/BoldLeaders",
			title: "Boldleaders",
			html: `<iframe  src="https://boldleaders.org"/>`,
		},
	],
	context: `  You are an expert educator of the elementals and compounds defined below...

	Basic Human Resources: the Elementals
	This finite list of Basic Human Resources is the result of continuous dialogue, reflection, research and practice in diverse locations and with diverse individuals and groups.  It identifies an elegant, simple framework and context for self ownership and design for practicing valuable competencies and increasing capacities.

	As a representation of the conversation, this list and the descriptions may undergo refinement and adjustment.

	If you got to this page without first reading the “Use it or Lose it” document, you may want to start there in order to understand the context more completely.

	Feel free to send comments to michael@boldleaders.org and brady@boldleaders.org.

	Elemental Basic Human Resources
	Senses: sight, smell, hearing/listening, taste & touch
	Instincts/Drives:  fear, reaction to pain,  hunger & procreation
	Emotions: these are tricky but so far we can identify contentment and interest
	Voice
	Relationship
	Participation
	Movement
	Communication
	Memory
	Mimicry
	Cooperation
	Observation
	Tears
	Laughter

	Senses:
	Our senses give us access to experimenting. We urge you to consider all of the senses, and play with how much you have adapted to the lack of use of these elemental resources.  Remember, as a child, you could use sight and focus on an object for long periods of time, looking, leading to wondering, yet as you grow older, your habits have you often miss the details that could be present.  Taste is something you have stopped using, often times not allowing for you to experiment and try new things, just as much as not moving can cause you poor health or adapting to the lack of your voice will eventually have you become silent.   Our hearing is almost habitually tuned to what we are used to hearing and unlike a child who revels in new sounds, our listening becomes habitual and we begin to consider the world from those habitual thoughts, versus being able to consider multiple points of view.   All of us have had moments where a smell cued a memory, yet how often we practice the use of our sense of smell with any intention.  It is the one sense that travels directly to a location within our brain.  Yet it is touch that is now considered by many researchers to be the most valuable of our senses.  Touch provides a sense of connection and contentment, (see emotions) and assures us we belong as well as are known.   In some societies, touching between humans is taboo, and  as an example some states in the U.S.A.  legislates touching in schools.  The touch we are talking about, is the human-to-human contact AND the ability to use our sense of touch to navigate. Many people we work with describe touch as one of the elemental resources they have stopped using.

	Instincts:  Though procreation, hunger and pain are obvious evolutionary survival mechanisms and  can be useful as elemental basic human resources, we at BoldLeaders tend to focus on the instinct called fear.  This elemental basic human resource could be one of the most useful we have, yet over time we do our best to push away fear, and attempt to name it something else, or hide from it. This often leaves us confused and unable to be ourselves, and if labeled something else, can become damaging, debilitating,  and even unsafe. Using the instinct of fear can have it be a valuable resource.  When we let fear be just that - fear - we often can then deal with the emotions, (see below) that are associated with our mislabeling fear, when the emotion present is actually  sadness, anger, depression, confusion, irrationality, feeling melancholy, etc.  Fear can be motivating as well as it can peak our ability to observe as well as perform.  It is a means to keeping us safe and it is important.

	Emotions:  At this time, it is difficult to discern the emotions that arrive with us at our birth, developing mostly over time in the first years of our lives and into young adults. Clearly anger appears at an early age, so we may consider anger as an elemental, and possibly two others we would like considered; contentment and interest. Contentment could be said to be marked by a feeling of satisfaction, safety, or even inner peace, and interest is that emotion that has us focus, pay attention to an event, a someone or a process.

	No doubt we can find ourselves adapting to that lack of use of the feelings of interest and anger, that may motivate  us or have us communicate, yet consider how much of the emotional feeling called contentment  we do  not appreciate.

	Voice: One of our first acts as a human being is to use our voice. We cry out, we shout  ourselves into the world, and as a child we are talkative and full of questions.  Human beings communicate in all kinds of ways, and our voice is one of the most powerful and individual.  Even those who do not have the power of speech, retain the power of their voice.  Much like the elemental human resource touch, we begin to suppress and not use this most basic of resources. The consequences are evident all over the world, and easily demonstrated as something many women quickly adapt to not using.

	Relationships:  We are in relationship with a human being even before we enter the world, and the moment we are snatched from our mother’s wombs we are immediately a relational being.  We are now in relationship with heat and cold, soft and hard, other humans, our own selves, the memories immediately being created and the world we begin to sense and observe.  We are always in relationship with something, someone, or somewhere, until we die, yet we quickly adapt to the notion we are not.  No man IS an island, yet over time it may seem we do our best to live on that illusion island.  The only thing we will do alone is die.  As Margaret Wheately shares, “Nothing living lives alone”.  Look around and note how many things you actually are related to, including the cloths on your body and the thoughts you are now having about that.

	Participation: Given we are in relationship with the world, we also participate. We are participatory in life from the moment of our birth, yet over time we may adapt to ourselves not participating or only participating where and when and how we think is safe and flattering. We stop taking risks.   We no longer take part.  Simply participating, what we call being a player or playing the game, can move great things.  Beginning something often times leads to the finish as humans are compelled to do all they can to  finish what they begin.

	Movement is an elemental resource that connects distance time and space. It allows for perspective and depth. It also is healthy for the brain as well as the body.  To move is to be in relationship with things, people and processes from different angles and allows others to observe your different angles as well.  Like participation, movement is key for our health and like participation; simply making that first move establishes our commitment and cements our goal. Please understand this is more than the ability to move your body.

	Communication: Most  people understand  communication is more than speaking, yet this elemental human resource is more than simply getting a message across. Many, if not all of us, begin to adapt to not communicating with others, in particular with people who matter the most to us, or those we perceive as most different from us. This clearly has consequences for us as individuals, families, and communities and as societies.

	Memory is often not thought of as a resource yet neuroscience is now demonstrating that it is likely we are already forming memories before our birth, while in our mother’s womb.  And there is long standing evidence that we tend to focus on memories of events that left us embarrassed, fearful and anxious, events where we failed or appeared foolish, or caused sadness, as opposed to intentionally and mindfully managing the existence of memories that bring us experiences of joy, appreciation, and successes.   Over time the memories seem to be fewer and more like each other. Left unmanaged, our memories can become focused on remorse and regret, instead of allowing us to grow and nurture what works.

	Mimicry is one of the best ways to learn and something we do very early as infants that can seem endless to an adult who delights in the tongue sticking out, or the blowing of bubbles.  This is an elemental resource that can help us move forward, both in being and knowledge at a quickened pace.  Simply doing as others do, in an area you want to develop, removes a need for perfection and allows for easy practicing.

	Cooperation:  Some researchers, anthropologists and philosophers propose that human beings are hard-wired from birth to cooperate. We are cooperative creatures. How quickly have you stopped cooperating with people who you know had great ideas and your interests at heart? How often do you resist this natural elemental resource to cooperate?

	Observation: Not just devoted to sight, but a full on effort to resource all our senses.  Babies are on point, from birth, and teenagers and young children are keen observers.  This is the hallmark of the investigator and practicing real observation, combined with other elementals leads to many an explanation, invention, or collaboration.

	Tears:  Science tells us that emotional tears, (one of three human types) shed  hormones and other toxins which accumulate during stress. Additional studies also suggest that crying stimulates the production of endorphins, our body’s natural pain killer and feel-good hormones and most of us have experienced the value of a good cry.  It is also a profound elemental form of communication. Unfortunately, this basic and elemental human resource has often been socially manipulated, especially for males and there are obvious consequences. This is a common elemental people share with us as  something they avoid, much like voice and touch.  Grieving, which often includes tears  is an important process for humans both on a community level and individual. The suppression of tears can be harmful.

	Laughter is easily demonstrated for the lack of use over time. Small children laugh all the time, and seemingly at will. As we grow, this elemental human resource seems to be drastically reduced and laughing at ourselves almost unheard of. There is a reason a person cannot stay sad for long, if only in the moment, upon entering a room full of people laughing. On the other hand, a person full of good humor, will not become sad by virtue of a room full of sad people.  Beyond the social benefits and attraction to people laughing, it has many direct health benefits. Laughter relieves physical tension and stress, leaving your muscles relaxed for up to 45 minutes after and it decreases stress hormones and increases immune cells and infection-fighting antibodies, thus improving your resistance to disease. Laughter triggers the release of endorphins which  promote an overall sense of well-being and can even temporarily relieve pain. Laughter  also protects the heart improving  the function of blood vessels and increases blood flow, which can help protect you against a heart attack and other cardiovascular problems.

	It is important to note that this is not a linear list, nor are we asserting that all humans in existence have adapted to the lack of use of all of these Basic Human Resources we are calling Elementals.  We have little doubt that you can even see the connections elementals can have on other elementals, like tears and laughter related  to the emotion of contentment. It is also important to note that we do not include “capacities”  such as the capacity for language, nor are willing to assert this is a finite list.  Neuroscience,  is and will continue to press our human understanding of ourselves and what it is to be human.  Even the theory  of  being “hardwired” to believe in something is now being stretched  by research and it is our observational yet untested  experience that devotion to something seems very possibly elemental.

	The Basic Human Resources: Examples of Compounds
	Becoming familiar with one or more Elemental Basic Human resouces involves action and doing.  There is an opportunity to measure through distance, time and form.  This  doing of one or more Elementals may create experiences that one can label and name.  We assert that these experiences of being are a result of the actions one undertakes to reclaim a basic human resource they have adapted to not using.  These experiences can be labeled, and can easily be labeled differently for each person.  Below are some of the Compounds that one may experience in practicing one or more of the Elementals, especially in combination.

	* Please note: This is not a finite list nor in any order of importance.

	Courage, compassion, creativity, imagination, perspective taking and creating,  curiosity, empathy,  thinking, cognition, wonder, awe, self confidence, collaboration,  humor, love, humility, tenacity, resilience,  persistence, endurance, grit, determination, resourcefulness, leadership, vulnerability, understanding,  awareness, motivation, joy and happiness.

	`,
}
