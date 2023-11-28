

const Tittle = ({heading,subHeading}) => {
    return (
        <div className="mt-4 mb-2 italic">
            <h2 className="text-4xl 
            text-purple-700
            font-semibold text-center">
               {heading}
                </h2>
            <p className="text-center mt-2
            text-xl  mb-2
             text-blue-400">{subHeading}</p>
            
        </div>
    );
};

export default Tittle;