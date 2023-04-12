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
    ]
});