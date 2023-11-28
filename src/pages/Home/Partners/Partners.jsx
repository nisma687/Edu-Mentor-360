import Tittle from "../../../component/Tittle";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../../hooks/useAxios";

const Partners = () => {
  const { data: sponsors,error, isLoading } = useQuery({
    queryKey: ["sponsors"],
    queryFn: async () => {
      const res = await axiosPublic.get("/sponsors");
      return res.data;
    },
  });

  if (isLoading) {
    
    return <div>Loading...</div>;
  }

  if (error) {
    
    return <div>Something went wrong</div>;
  }

  return (
    <div className="mx-auto">
      <Tittle heading="Our Partners" subHeading="We are proud to be associated with these companies" />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
        {sponsors && sponsors.map((item,index) => (
          <div key={index} className="card w-50 bg-base-100 shadow-xl">
             <figure className="px-10 pt-10">
              <img src={item?.img} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                {item?.sponsorName}
              </h2>
              <p>
                {item?.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
