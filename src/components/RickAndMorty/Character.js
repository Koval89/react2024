const Character = ({character}) => {
    const {name, id, status,species, gender, images} = character
    return (
        <div>
            <div>name:{name}</div>
            <div>id:{id}</div>
            <div>status:{status}</div>
            <div>species:{species}</div>
            <div>gender:{gender}</div>
            <img src={images} alt={name}/>
        </div>
    );
};

export {Character};