import React from "react";
import { useForm } from "react-hook-form";
import { addRsvp } from "../api/firebase";
import { useTranslation } from "react-i18next";
import HeartIcon from "../icon/HeartIcon";

export default function RsvpForm() {
  const { t } = useTranslation();

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
      <h2 className="text-4xl font-light my-2 mt-24 text-center text-3 mb-4">
        Will You Attend?
      </h2>
      <div className="text-center mb-4">
        <a
          href="/menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-beigeC hover:text-orange-950 text-sm font-bold"
        >
          {t("viewMenu")}
        </a>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:px-20 px-5"
      >
        <div className="mb-4">
          <input
            {...register("name", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-8 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder={t("name")}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">Name is required</span>
          )}
        </div>

        <div className="mb-4">
          <select
            {...register("soupSalad", { required: true })}
            className="shadow border rounded w-full py-2 px-3 text-8 leading-tight focus:outline-none focus:shadow-outline"
            id="soupSalad"
          >
            <option value="">{t("soup+salad")}</option>
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
          <select
            {...register("entree", { required: true })}
            className="shadow border rounded w-full py-2 px-3 text-8 leading-tight focus:outline-none focus:shadow-outline"
            id="entree"
          >
            <option value="">{t("Entree")}</option>
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
          <select
            {...register("dessert", { required: true })}
            className="shadow border rounded w-full py-2 px-3 text-8 leading-tight focus:outline-none focus:shadow-outline"
            id="dessert"
          >
            <option value="">{t("Dessert")}</option>
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
          <textarea
            {...register("notes")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-8 leading-tight focus:outline-none focus:shadow-outline"
            id="notes"
            placeholder={t("Notes")}
          />
        </div>

        <div className="flex justify-center">
          <button
            className="bg-beigeC text-white font-bold py-2 lg:px-80 md:px-72 px-32 hover:brightness-110 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className="text-center">
          <div className="text-base text-7">{t("rsvp-message1")}</div>
          <div className="flex justify-center mt-20">
            <HeartIcon />
          </div>
          <div className="mt-3 mb-10 text-3">See you on Jan 13, 2024</div>
        </div>
      </form>
    </div>
  );
}
