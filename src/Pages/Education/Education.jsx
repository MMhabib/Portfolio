import { Helmet } from "react-helmet-async";

const Education = () => {
  return (
    <div className="bg-slate-400 py-4 mt-4 mb-0">
      <div
       
        className="card lg:card-side bg-base-100 shadow-xl m-6 mx-14"
      >
        <figure className="m-6 p-2">
          <img
            className="border rounded-md w-40 h-42 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdHdcg6tnvQq-V9OPo2W7A0e0mt1dtBmJxQ&s"
            alt="BAIUST"
          />
        </figure>
        <div className="card-body lg:ml-96">
          <h1 className="card-title">
            Bangladesh Army International University of Science and Technology
          </h1>
          <h3>Cumilla, Bangladesh</h3>
          <h2 className="font-semibold">
            Bachelor of Science in Computer Science and Engineering (BSc)
          </h2>
          <p>March 2020 - March 2024</p>
        </div>
      </div>
      <div
        
        className="card lg:card-side bg-base-100 shadow-xl m-6 mx-14"
      >
        <figure className="m-6 p-2">
          <img
            className="border rounded-md w-40 h-42 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZ20OFrPchAgPvKiatvajIBaleDPK8iqtwA&s"
            alt="Cumilla Government College"
          />
        </figure>
        <div className="card-body lg:ml-96">
          <h1 className="card-title">Cumilla Government College</h1>
          <h3>Cumilla, Bangladesh</h3>
          <h2 className="font-semibold">Higher Secondary Certificate (HSC)</h2>
          <p>June 2016 - April 2018</p>
        </div>
      </div>
      <div
       
        className="card lg:card-side bg-base-100 shadow-xl m-6 mx-14"
      >
        <figure className="m-6 p-2">
          <img
            className="border rounded-md w-40 h-42 object-cover"
            src="https://upload.wikimedia.org/wikipedia/en/c/c6/Comilla_Zilla_School.jpg"
            alt="Cumilla Zilla School"
          />
        </figure>
        <div className="card-body lg:ml-96">
          <h1 className="card-title">Cumilla Zilla School</h1>
          <h3>Cumilla, Bangladesh</h3>
          <h2 className="font-semibold">Secondary School Certificate (SSC)</h2>
          <p>January 2011 - March 2016</p>
        </div>
      </div>
      <div
        
        className="card lg:card-side bg-base-100 shadow-xl m-6 mx-14"
      >
        <figure className="m-6 p-2">
          <img
            className="border rounded-md w-40 h-42 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-WAynZop1XsDA7LSNJ7AxQLh6Yn6KMLx1g&s"
            alt="Gulbagicha Model Government Primary School"
          />
        </figure>
        <div className="card-body lg:ml-96">
          <h1 className="card-title">Gulbagicha Model Government Primary School</h1>
          <h3>Cumilla, Bangladesh</h3>
          <h2 className="font-semibold">Primary School Certificate (PSC)</h2>
          <p>January 2010 - December 2010</p>
        </div>
      </div>
      <div
        
        className="card lg:card-side bg-base-100 shadow-xl m-6 mx-14"
      >
        <figure className="m-6 p-2">
          <img
            className="border rounded-md w-40 h-42 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3eMIGMSMDglSDeLQfp80bttz9541ycYpX-g&s"
            alt="YWCA of Cumilla"
          />
        </figure>
        <div className="card-body lg:ml-96">
          <h1 className="card-title">YWCA of Cumilla</h1>
          <h3>Cumilla, Bangladesh</h3>
          <h2 className="font-semibold">Studied from Nursery to Class-4</h2>
          <p>January 2004 - December 2009</p>
        </div>
      </div>
      <Helmet>
        <title>Habib | Education</title>
      </Helmet>
    </div>
  );
};

export default Education;
