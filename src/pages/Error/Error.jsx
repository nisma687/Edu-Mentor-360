

const Error = () => {
    return (
        <div>
            <h2 className="text-3xl
            font-semibold
            text-blue-600
             text-center">
                Opps!!! Error 404
            </h2>
            <h2 className="text-2xl
            font-semibold text-blue-500
             text-center">
                Page Not Found
            </h2>
            
                <a href="/" className=" btn btn-primary 
                text-center
                text-blue-500
                text-2xl
                font-semibold
                hover:text-blue-600
                hover:underline
                ">Go Back</a>
        

        </div>
    );
};

export default Error;