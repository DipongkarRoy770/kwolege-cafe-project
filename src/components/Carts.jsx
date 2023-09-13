import { FaBookmark } from 'react-icons/fa';

const Carts = ({ actor, actorData }) => {
    const { name, role, image, salary } = actor;
    // console.log(actor)
    return (
        <div className="card card-side bg-rose-100 shadow-xl">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <div className='flex items-center'>
                    <h2 className="card-title mr-12">{name}</h2>
                    <span onClick={() => actorData(actor)}><FaBookmark /></span>
                </div>
                <p>{role}</p>
                <p>${salary}</p>
                <button className="btn">discription</button>
            </div>
        </div>
    );
};

export default Carts;