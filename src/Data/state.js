import rLogo from '../img/raspberry.png'

let state = {
    raspberry: {
        name: 'Raspberry',
        logo: 'raspberry.png',
        img: 'rasp',
        slogan: 'Feel the Raspberry',
        pics: [
            'https://images.unsplash.com/photo-1563780352305-312ccc80a75e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80',
            'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1514813279845-a4455283689a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1513834162622-bcd164ad6a88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
            'https://images.unsplash.com/photo-1516727003284-a96541e51e9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        ]
    },
    cloudberry:{
        name: 'Cloudberry',
        logo: 'cloudberry.jpg',
        img: 'cloud',
        slogan: 'Cotton. Silk. Cloudberry',
        pics: [
            'https://images.unsplash.com/photo-1517940310602-26535839fe84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1512359573855-953710d3f7a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1511746228549-9b12dc9a0a53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1514851947871-97fd1e04b2e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
            'https://images.unsplash.com/photo-1514867036548-8c2a9178b4fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'

        ]
    },
    shop: [
        {
            image1:'https://images.unsplash.com/photo-1620979673980-7ec12c260d38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80',
            image2:'https://images.unsplash.com/photo-1610729864209-5c916862b6c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
            title:'Pink dress',
            price:'$20.99'
        },
        {
            image1:'https://images.unsplash.com/photo-1574868844366-3df4c6d7e2c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80',
            image2:'https://images.unsplash.com/photo-1574868843985-6caab2f9e64c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80',
            title:'Blue dress',
            price:'$93.99'
        },
        {
            image1:'https://images.unsplash.com/photo-1576023614350-2f4174f217f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1916&q=80',
            image2:'https://images.unsplash.com/photo-1576023614379-f47d12365b69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
            title:'Graphite sweatshirt',
            price:'$10.99'
        },
        {
            image1:'https://images.unsplash.com/photo-1574773064075-7b40e4b43950?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80',
            image2:'https://images.unsplash.com/photo-1574773064466-e6a7475aea2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80',
            title:'Leather Jacket',
            price:'$60.99'
        },
        {
            image1:'https://images.unsplash.com/photo-1623957922726-a527735895d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
            image2:'https://images.unsplash.com/photo-1623957884654-85f595bc5ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80',
            title:'Black dress',
            price:'$29.99'
        },
        {
            image1:'https://images.unsplash.com/photo-1622562744540-33d13cef690f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1962&q=80',
            image2:'https://images.unsplash.com/photo-1622579642291-9a3c5e877b60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1980&q=80',
            title:'Green Shirt',
            price:'$12.99'
        },
        {
            image1:'https://images.unsplash.com/photo-1613673053938-720a7a5b3a57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
            image2:'https://images.unsplash.com/photo-1613672710119-573123221c48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
            title:'Turtleneck sweater',
            price:'$29.99'
        },
        {
            image1:'https://images.unsplash.com/photo-1582533575066-75bd83ac91de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1822&q=80',
            image2:'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1812&q=80',
            title:'Silver Sequin Dress',
            price:'$120.99'
        },
        {
            image1:'https://images.unsplash.com/photo-1613398257838-49c52094463e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80',
            image2:'https://images.unsplash.com/photo-1613398257629-75589a9bb10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80',
            title:'White Lace Dress',
            price:'$40.99'
        },
        {
            image1:'https://images.unsplash.com/photo-1622544777612-ab372fed94bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1852&q=80',
            image2:'https://images.unsplash.com/photo-1622544777916-bf62014f1c7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1892&q=80',
            title:'White Shirt',
            price:'$30.99'
        },
    ]
}

export default state
