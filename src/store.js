import {reactive} from 'vue';

export const store = reactive({

    links:[
        "HOME",
        "COURSES",
        "INSTRUCTORS",
        "EVENTS",
        "PAGES",
        "ELEMENTS",
    ],

    slideHeader:[
        {
            image: '../public/course-9-f-img.jpg',
            title: 'Contemporary Ideas',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, pariatur maiores necessitatibus amet in dolore velit provident vero distinctio deleniti a rem sapiente sunt veniam! Doloremque, dicta voluptatem. Obcaecati, inventore?',
        },

        {
            image: '../public/course-1-f-img.jpg',
            title: 'Modern Learning',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, pariatur maiores necessitatibus amet in dolore velit provident vero distinctio deleniti a rem sapiente sunt veniam! Doloremque, dicta voluptatem. Obcaecati, inventore?',
        },

        {
            image: '../public/course-5-f-img.jpg',
            title: 'More Skills',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, pariatur maiores necessitatibus amet in dolore velit provident vero distinctio deleniti a rem sapiente sunt veniam! Doloremque, dicta voluptatem. Obcaecati, inventore?',
        },
    ],

    activeIndex: 0,

    cardsSectionOne: [
        {
            image: '../public/h5-custom-icon-1.png',
            text: 'Languages',
        },
        {
            image: '../public/h5-custom-icon-2.png',
            text: 'Software',
        },
        {
            image: '../public/h5-custom-icon-3.png',
            text: 'Business',
        },
        {
            image: '../public/h5-custom-icon-4.png',
            text: 'Chemistry',
        },
        {
            image: '../public/h5-custom-icon-5.png',
            text: 'Science',
        },
        {
            image: '../public/h5-custom-icon-6.png',
            text: 'DIY&Craft',
        }
    ],

    sliderSectionFour: [
        {
            image: '../public/instructor-img-6.jpg',
            cit: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, illo eveniet, soluta velit placeat nisi sapiente autem necessitatibus a maxime laudantium laboriosam quia dolor ut est. Neque, ad voluptas.',
            name: 'Joan Collins',
            status: 'STUDENT',
        },

        {
            image: '../public/instructor-img-5.jpg',
            cit: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, illo eveniet, soluta velit placeat nisi sapiente autem necessitatibus a maxime laudantium laboriosam quia dolor ut est. Neque, ad voluptas.',
            name: 'Marcus Morrison',
            status: 'TEACHER',
        },

        {
            image: '../public/instructor-img-4.jpg',
            cit: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, illo eveniet, soluta velit placeat nisi sapiente autem necessitatibus a maxime laudantium laboriosam quia dolor ut est. Neque, ad voluptas.',
            name: 'Emily Watson',
            status: 'TEACHER',
        },
    ],

    activeIndexS4: 0,

    selectorSectionFive: [
        {
            titleColumn: 'What We Do',
            title: 'Learning Possibilities',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, illo eveniet, soluta velit placeat nisi sapiente autem necessitatibus a maxime laudantium laboriosam quia dolor ut est. Neque, ad voluptas.',
            infoOne: 'We enrich lives through learning',
            infoTwo: 'Maximizing potential throungh individual attention',
            infoThree: 'The trusted name for specialized training',
            infoFour: 'People teach. People learn. This is where they connect'
        },
        {
            titleColumn: 'Degree Programme',
            title: 'Learning Programme',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, illo eveniet, soluta velit placeat nisi sapiente autem necessitatibus a maxime laudantium laboriosam quia dolor ut est. Neque, ad voluptas.',
            infoOne: 'We enrich lives through learning',
            infoTwo: 'Maximizing potential throungh individual attention',
            infoThree: 'The trusted name for specialized training',
            infoFour: 'People teach. People learn. This is where they connect'
        },
        {
            titleColumn: 'Career Achievements',
            title: 'Career Possibilities',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, illo eveniet, soluta velit placeat nisi sapiente autem necessitatibus a maxime laudantium laboriosam quia dolor ut est. Neque, ad voluptas.',
            infoOne: 'We enrich lives through learning',
            infoTwo: 'Maximizing potential throungh individual attention',
            infoThree: 'The trusted name for specialized training',
            infoFour: 'People teach. People learn. This is where they connect'
        },
        {
            titleColumn: 'Personal Managment',
            title: 'How To Manage',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, illo eveniet, soluta velit placeat nisi sapiente autem necessitatibus a maxime laudantium laboriosam quia dolor ut est. Neque, ad voluptas.',
            infoOne: 'We enrich lives through learning',
            infoTwo: 'Maximizing potential throungh individual attention',
            infoThree: 'The trusted name for specialized training',
            infoFour: 'People teach. People learn. This is where they connect'
        },
        {
            titleColumn: 'Steps To Success',
            title: 'Great Success',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, illo eveniet, soluta velit placeat nisi sapiente autem necessitatibus a maxime laudantium laboriosam quia dolor ut est. Neque, ad voluptas.',
            infoOne: 'We enrich lives through learning',
            infoTwo: 'Maximizing potential throungh individual attention',
            infoThree: 'The trusted name for specialized training',
            infoFour: 'People teach. People learn. This is where they connect'
        },
        {
            titleColumn: 'Knowledge Tranfer',
            title: 'Learning Transfer',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae mollitia, illo eveniet, soluta velit placeat nisi sapiente autem necessitatibus a maxime laudantium laboriosam quia dolor ut est. Neque, ad voluptas.',
            infoOne: 'We enrich lives through learning',
            infoTwo: 'Maximizing potential throungh individual attention',
            infoThree: 'The trusted name for specialized training',
            infoFour: 'People teach. People learn. This is where they connect'
        }
    ],

    activeIndexS5: 0,

    sliderSectionSix: [
        '../public/landing-carousel-gallery-img-1.jpg',
        '../public/landing-carousel-gallery-img-2.jpg',
        '../public/landing-carousel-gallery-img-3.jpg',
        '../public/landing-carousel-gallery-img-4.jpg',
        '../public/landing-carousel-gallery-img-5.jpg',
        '../public/landing-carousel-gallery-img-7.jpg'
    ],

    
    firstColumnFooter: {
        image: '../public/logo-light.png',
        testo: 'Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home',
        phone: '1-677-124-44227',
        date: 'Mon-Sat 8.00 - 18.00'
    },

    secondColumnFooter: {
        title: 'Popular Courses',
        firstSubject: 'Business English',
        firstTeacher: 'Preston Marshall',
        secondSubject: 'Social Computing',
        secondTeacher: 'David Sanders',
        thirdSubject: 'Learn Spanish',
        thirdTeacher: 'Jennie King'

    },

    thirdColumnFooter: {
        title: 'Support',
        linkOne: 'User dashboard',
        linkTwo: 'Contact Us',
        linkThree: 'FAQ',
        linkFour: 'Course Offer',
        linkFive: 'Events'
    },

    fourthColumnFooter: {
        title: 'Flexible Learning',
        image: '../public/footer-img-1.png',
    },
});