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
});