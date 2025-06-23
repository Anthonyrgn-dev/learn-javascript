const day = 'wednesday';

switch (day) {
    case 'monday':
        console.log(`Plan course for Monday`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare the theory lesson`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Invalid day`);
}

if (day === 'wednesday' || day === 'thursday') {
    console.log(`I'm working on the project`);
}