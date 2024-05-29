import i from '../../assets/bookstore.png'

const Project = () => {
  return (
    <div>
      <div className="m-4 card lg:card-side bg-base-100 shadow-xl flex flex-col lg:flex-row">
            <figure className="w-full lg:w-[75%] p-6  flex-grow">
                <img
                    className="h-full w-full border-2 border-rose-500 p-2 rounded-lg object-cover"
                    src={i}
                    alt="441900993-1833189517164108-8520224708537517379-n"
                />
            </figure>
            <div className="card-body w-full lg:w-1/2 flex-grow flex flex-col justify-between">
                <h2 className="card-title">OnlineBookstore</h2>
                <p>
                   
                    <ul>
                        <li>• Developed a Bookstore .</li>
                        <li>• User Can Buy and Sell Books.</li>
                        <li>• Made an admin dashboard with versatile functionalities.</li>
                        <li>• Developed an intuitive User dashboard with functionalities.</li>
                    </ul>
                    <h3 className='text-sky-400 font-bold'>Admin Login:</h3>
                    Email: admin1@gmail.com <br />
                    Password: Admin#@321 <br />
                    Student Login: <br />
                    Email: akib@gmail.com <br />
                    Password: Akib#@321 <br />
                    Certificate Verification: <br />
                    Department: CSE <br /> 
                    Student ID: 1111019 <br />
                </p>
                <div className="card-actions  sm:justify-center lg:justify-end">
                    <a href="https://daisyui.com/components/collapse/"><button className="btn btn-outline btn-info">Live site</button></a>
                    <button className="btn btn-outline btn-accent">Server site</button>
                </div>
            </div>
        </div>
        <div className="  m-4  card lg:card-side bg-base-100 shadow-xl flex flex-col lg:flex-row ">
            <figure className=" h-full w-full lg:w-1/2 p-6 flex-grow ">
                <img
                    className="h-full w-full border-2 border-rose-500 rounded-lg     p-2 object-cover"
                    src="https://i.ibb.co/VWqGg6v/441900993-1833189517164108-8520224708537517379-n.png"
                    alt="441900993-1833189517164108-8520224708537517379-n"
                    
                />
            </figure>
            <div className="card-body w-full lg:w-1/2 flex-grow">
                <h2 className="card-title">New album is released!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint unde facere distinctio impedit rem esse dicta iste doloremque exercitationem est rerum eum cupiditate, omnis voluptas. Explicabo inventore natus voluptatibus?
                Hic voluptatum, dicta ad iste libero consectetur, similique neque repudiandae cupiditate, natus labore quia debitis maiores deserunt quam pariatur ratione modi quasi illum. Repellendus soluta nesciunt ducimus hic aliquid corporis?
                Ipsum fugiat doloribus minus, cumque quiaex nobis esse veritatis natus. Aliquid amet dolores quam.
                Tempora, minus. Quam, non. Eos optio sed id doloremque suscipit cum fugiat vel labore numquam earum aspernatur, inventore nemo asperiores odit porro! Quisquam, hic eos a possimus accusamus odit ducimus!</p>
                <div className="card-actions  sm:justify-center lg:justify-end">
                    <a href="https://daisyui.com/components/collapse/"><button className="btn btn-outline btn-info">Live site</button></a>
                    <button className="btn btn-outline btn-accent">Server site</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Project;
