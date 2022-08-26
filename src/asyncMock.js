const items = [
    {
        id:1,
        title: 'What is cristalina',
        category: 'health',
        subcategory: 'first-aid',
        img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/03/shutterstock_1466690546.jpg?resize=2048,1190',
        duration: '5',
        factCheck: true,
        author: 'Amy Roberts',
        lastUpdate: 'May 5th of 2021',
        source: 'Lavoie J. The Theosophical Society: The History of a Spiritualist Movement. Estados Unidos: Universal-Publishers; 2012. Williams C. Jiddu Krishnamurti: World Philosopher (1895-1986) : His Life and Thoughts. India: Motilal Banarsidass Publ; 2004.',
        quote: 'I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.'
    },
    {
        id:2,
        title: 'hialuronic acid',
        category: 'natural remedies',
        subcategory: 'natural therapies',
        img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/03/shutterstock_1466690546.jpg?resize=2048,1190',
        duration: '5',
        factCheck: true,
        author: 'Amy Roberts',
        lastUpdate: 'May 5th of 2021',
        source: 'Lavoie J. The Theosophical Society: The History of a Spiritualist Movement. Estados Unidos: Universal-Publishers; 2012. Williams C. Jiddu Krishnamurti: World Philosopher (1895-1986) : His Life and Thoughts. India: Motilal Banarsidass Publ; 2004.',
        quote: 'I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.'
    },
    {
        id:3,
        title: 'tattos',
        category: 'wellness',
        subcategory: 'beauty and personal care',
        img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/03/shutterstock_1466690546.jpg?resize=2048,1190',
        duration: '5',
        factCheck: true,
        author: 'Amy Roberts',
        lastUpdate: 'May 5th of 2021',
        source: 'Lavoie J. The Theosophical Society: The History of a Spiritualist Movement. Estados Unidos: Universal-Publishers; 2012. Williams C. Jiddu Krishnamurti: World Philosopher (1895-1986) : His Life and Thoughts. India: Motilal Banarsidass Publ; 2004.',
        quote: 'I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.'
    },
    {
        id:4,
        title: 'ethic alimentation',
        category: 'diet',
        subcategory: 'organic food',
        img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/03/shutterstock_1466690546.jpg?resize=2048,1190',
        duration: '5',
        factCheck: true,
        author: 'Amy Roberts',
        lastUpdate: 'May 5th of 2021',
        source: 'Lavoie J. The Theosophical Society: The History of a Spiritualist Movement. Estados Unidos: Universal-Publishers; 2012. Williams C. Jiddu Krishnamurti: World Philosopher (1895-1986) : His Life and Thoughts. India: Motilal Banarsidass Publ; 2004.',
        quote: 'I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.'
    },
    {
        id:5,
        title: 'cherry tomatoes',
        category: 'recipes',
        subcategory: 'infusions',
        img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/03/shutterstock_1466690546.jpg?resize=2048,1190',
        duration: '5',
        factCheck: true,
        author: 'Amy Roberts',
        lastUpdate: 'May 5th of 2021',
        source: 'Lavoie J. The Theosophical Society: The History of a Spiritualist Movement. Estados Unidos: Universal-Publishers; 2012. Williams C. Jiddu Krishnamurti: World Philosopher (1895-1986) : His Life and Thoughts. India: Motilal Banarsidass Publ; 2004.',
        quote: 'I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.'
    },
    {
        id:6,
        title: 'limits',
        category: 'motherhood',
        subcategory: 'teenagers',
        img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/03/shutterstock_1466690546.jpg?resize=2048,1190',
        duration: '5',
        factCheck: true,
        author: 'Amy Roberts',
        lastUpdate: 'May 5th of 2021',
        source: 'Lavoie J. The Theosophical Society: The History of a Spiritualist Movement. Estados Unidos: Universal-Publishers; 2012. Williams C. Jiddu Krishnamurti: World Philosopher (1895-1986) : His Life and Thoughts. India: Motilal Banarsidass Publ; 2004.',
        quote: 'I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.'
    },
    {
        id:7,
        title: 'infidelity',
        category: 'relationship',
        subcategory: 'conflicts',
        img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/03/shutterstock_1466690546.jpg?resize=2048,1190',
        duration: '5',
        factCheck: true,
        author: 'Amy Roberts',
        lastUpdate: 'May 5th of 2021',
        source: 'Lavoie J. The Theosophical Society: The History of a Spiritualist Movement. Estados Unidos: Universal-Publishers; 2012. Williams C. Jiddu Krishnamurti: World Philosopher (1895-1986) : His Life and Thoughts. India: Motilal Banarsidass Publ; 2004.',
        quote: 'I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.'
    },
    {
        id:8,
        title: 'isometric force',
        category: 'fitness',
        subcategory: 'sports',
        img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/03/shutterstock_1466690546.jpg?resize=2048,1190',
        duration: '5',
        factCheck: true,
        author: 'Amy Roberts',
        lastUpdate: 'May 5th of 2021',
        source: 'Lavoie J. The Theosophical Society: The History of a Spiritualist Movement. Estados Unidos: Universal-Publishers; 2012. Williams C. Jiddu Krishnamurti: World Philosopher (1895-1986) : His Life and Thoughts. India: Motilal Banarsidass Publ; 2004.',
        quote: 'I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.'
    },
    {
        id:9,
        title: 'moho',
        category: 'lifestyle',
        subcategory: 'house tips',
        img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/03/shutterstock_1466690546.jpg?resize=2048,1190',
        duration: '5',
        factCheck: true,
        author: 'Amy Roberts',
        lastUpdate: 'May 5th of 2021',
        source: 'Lavoie J. The Theosophical Society: The History of a Spiritualist Movement. Estados Unidos: Universal-Publishers; 2012. Williams C. Jiddu Krishnamurti: World Philosopher (1895-1986) : His Life and Thoughts. India: Motilal Banarsidass Publ; 2004.',
        quote: 'I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.'
    },
    {
        id:10,
        title: 'hola',
        category: 'health',
        subcategory: 'first aid',
        img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/03/shutterstock_1466690546.jpg?resize=2048,1190',
        duration: '5',
        factCheck: true,
        author: 'Amy Roberts',
        lastUpdate: 'May 5th of 2021',
        source: 'Lavoie J. The Theosophical Society: The History of a Spiritualist Movement. Estados Unidos: Universal-Publishers; 2012. Williams C. Jiddu Krishnamurti: World Philosopher (1895-1986) : His Life and Thoughts. India: Motilal Banarsidass Publ; 2004.',
        quote: 'I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.'
    },
    {
        id:11,
        title: 'holi',
        category: 'health',
        subcategory: 'diseases',
        img: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/03/shutterstock_1466690546.jpg?resize=2048,1190',
        duration: '5',
        factCheck: true,
        author: 'Amy Roberts',
        lastUpdate: 'May 5th of 2021',
        source: 'Lavoie J. The Theosophical Society: The History of a Spiritualist Movement. Estados Unidos: Universal-Publishers; 2012. Williams C. Jiddu Krishnamurti: World Philosopher (1895-1986) : His Life and Thoughts. India: Motilal Banarsidass Publ; 2004.',
        quote: 'I like to look at one or two random quotes each morning. It can be a good exercise for journaling prompts.'
    }
]

export const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."
    },
    {
      question: "Dignissimos sequi architecto?",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque."
    },
    {
      question: "Voluptas praesentium facere?",
      answer: "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque."
    }
  ];

export const testimonies = [
    {
        person: 'Lucia Gonzalez',
        testimonie: 'Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.'
    },
    {
        person: 'Luciana Gonzalez',
        testimonie: 'Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.'
    },
    {
        person: 'Lucrecia Gonzalez',
        testimonie: 'Me gustaría agradecer al sitio, me ayudó de una manera inimaginable, el psicólogo fue sumamente servicial y acogedor conmigo y me siento mejor conmigo mismo.'
    }
]

export const getItemsFromSource = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(items)
        },)
    })
}
export const getItemsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.filter(item => (item.category).replace(/\s/g , "-") === categoryId))
        },)
    })
}
export const getItemsBySubcategory = (subcategoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.filter(item => (item.subcategory).replace(/\s/g , "-") === subcategoryId))
        },)
    })
}


export const getItemByTitle = (title) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(item => item.title.replace(/\s/g , "-") === title))
        },5)
    })
}
export const getItemById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(item => item.id.replace(/\s/g , "-") === id))
        },5)
    })
}
export default items