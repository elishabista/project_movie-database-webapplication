import { useNavigate } from "react-router-dom";
import PageNotFoundImg from "../assets/img/404.png";

const Error = () => {
  const navigate = useNavigate();
  return (
    <main className="flex h-full w-full flex-col bg-background">
  
      <div className=" grow flex align-center justify-around align-center">
        <div className="grid grid-cols-12">
          <div className="col-span-6 col-start-4">
            <div className="flex-col gap-x-8	md:flex-row	justify-center">

              <div className="ml-4 flex flex-col align-center">
              <img src={PageNotFoundImg} height={"220"} alt="not-found-img" />
                <h1
                  className="font-semibold text-onSurface text-center"
                  style={{ fontSize: "6.5rem", lineHeight: "130%" }}
                >
                  404
                </h1>
                <p
                  className="mt-4 font-semibold md:mt-6 text-onSurfaceVariant text-center"
                  color="text-white"
                >
                  "UH OH! You’re lost."
                </p>
                <p className="mt-3 text-onSurfaceVariant md:mt-4 text-center">
                  {
                    "The page you are looking for does not exist. How you got here is a mystery. But you can click the Button below to go back to the homepage"
                  }
                </p>
                <button
  type="button"
  className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-block mx-auto"
  onClick={() => {
    navigate("/");
  }}
>
  Go to Home
</button>


                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;
