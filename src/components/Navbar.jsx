

const Navbar = () => {
    return (
        <div className="navbar bg-rose-100">
            <div className="flex-1">
                <h3 className=" normal-case text-3xl">Knowledge cafe</h3>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://images.pexels.com/photos/15239/flower-roses-red-roses-bloom.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;