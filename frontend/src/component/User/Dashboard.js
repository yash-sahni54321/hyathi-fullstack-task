import React, { Fragment, useEffect } from "react";
import Loader from "../layout/Loader";
import Sidebar from "../layout/Sidebar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useAlert } from "react-alert";
import {
  clearErrors,
  getPokemon,
  myAllPokemons,
} from "../../actions/pokemonAction";
const Dashboard = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { myPokemons, error, loading } = useSelector(
    (state) => state.myPokemons
  );
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const { pokemons } = useSelector((state) => state.pokemons);

  ChartJS.register(ArcElement, Legend, Tooltip);
  const doughnutState = {
    labels: ["Adopted Pokemons", "Available Pokemons"],
    datasets: [
      {
        labels: "Pokemons",
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [myPokemons?.length, pokemons?.length - myPokemons?.length],
      },
    ],
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      dispatch(myAllPokemons());
      dispatch(getPokemon());
    }
  }, [error, dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <section className="flex mt-16  justify-start ">
            <Sidebar />
            <div class="p-16">
              <div class="p-8 bg-white shadow mt-24">
                <div class="grid grid-cols-1 md:grid-cols-3">
                  <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                    <div>
                      <p class="font-bold text-gray-700 text-xl">
                        {pokemons?.length || 0}
                      </p>
                      <p class="text-gray-400">Available Pokemons</p>
                    </div>
                    <div>
                      <p class="font-bold text-gray-700 text-xl">
                        {myPokemons?.length || 0}
                      </p>
                      <p class="text-gray-400">Adopted Pokemons</p>
                    </div>
                  </div>
                  <div class="relative">
                    <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                      <div className="flex justify-end">
                        <Doughnut data={doughnutState} />
                      </div>
                    </div>
                  </div>

                  <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                    <Link to="/">
                      <button class="text-white py-2 px-5 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                        Adopt More
                      </button>
                    </Link>
                  </div>
                </div>

                {isAuthenticated && (
                  <div class="mt-28 text-center border-b pb-12">
                    <h1 class="text-4xl font-medium text-gray-700">
                      {user.name}
                    </h1>
                    <p class="font-light text-gray-600 mt-3">{user.email}</p>

                    <p class="mt-8 text-gray-500">Role : {user.role}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
