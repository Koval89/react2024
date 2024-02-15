// const Characters = (props) => {
//     return(
//         <div>
//             <h1>{props.name}</h1>
//             <img src={props.img}
//                  alt={props.name}/>
//         </div>
//     );
//
// };
// export {Characters};

//деструктиризація
// const Characters = ({img,name}) => {
//     return(
//         <div>
//             <h1>{name}</h1>
//             <img src={img}
//                  alt={name}/>
//         </div>
//     );
//
// };
// export {Characters};

// const Characters = (props) => {
//     const {img, name}=props
//     return(
//         <div>
//             <h1>{name}</h1>
//             <img src={img}
//                  alt={name}/>
//         </div>
//     );
//
// };
// export {Characters};


const Characters = ({character}) => {
    const {name, img} = character;

    return (
        <div>
            <h1>{name}</h1>
            <img
                src={img}
                alt={name}/>
        </div>
    );
};

export {Characters};