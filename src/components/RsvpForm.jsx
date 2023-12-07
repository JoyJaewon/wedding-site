import React from "react";
import { useForm } from "react-hook-form";
import { addRsvp } from "../api/firebase";

export default function RsvpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await addRsvp(data);
      console.log(data);
      console.log("RSVP submitted successfully");
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Will You Attend?</h2>
      <div className="text-center mb-4">
        <a
          href="/menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-sm font-bold"
        >
          View Full Menu
        </a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            {...register("name", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
          {errors.name && (
            <span className="text-red-500 text-xs">Name is required</span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="soupSalad"
          >
            Soup + Salad
          </label>
          <select
            {...register("soupSalad", { required: true })}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="soupSalad"
          >
            <option value="">Select an option</option>
            <option value="smokedCornChowder">SMOKED CORN CHOWDER</option>
            <option value="romaine">ROMAINE</option>
            <option value="choppedSalad">CHOPPED SALAD</option>
          </select>
          {errors.soupSalad && (
            <span className="text-red-500 text-xs">
              Please choose an option
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="entree"
          >
            Entree
          </label>
          <select
            {...register("entree", { required: true })}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="entree"
          >
            <option value="">Select an option</option>
            <option value="ribeye">19 OZ RIBEYE</option>
            <option value="kingSalmon">SEASONAL KING SALMON</option>
            <option value="freeRangeChicken">FREE-RANGE HALF CHICKEN</option>
            <option value="newYorkStrip">16 OZ NEW YORK STRIP</option>
          </select>
          {errors.entree && (
            <span className="text-red-500 text-xs">
              Please choose an option
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dessert"
          >
            Dessert
          </label>
          <select
            {...register("dessert", { required: true })}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dessert"
          >
            <option value="">Select an option</option>
            <option value="valrhonaChocolate">
              VALRHONA CHOCOLATE 3 -WAYS
            </option>
            <option value="butterscotchPotDeCreme">
              BUTTERSCOTCH POT DE CREME
            </option>
            <option value="seasonalSorbet">SEASONAL SORBET</option>
          </select>
          {errors.dessert && (
            <span className="text-red-500 text-xs">
              Please choose an option
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="notes"
          >
            Notes
          </label>
          <textarea
            {...register("notes")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="notes"
            placeholder="Any special requests?"
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
