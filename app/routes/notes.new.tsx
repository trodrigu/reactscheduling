import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect, useRef } from "react";

import { createNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

export const action = async ({ request }: ActionArgs) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const title = formData.get("title");
  const oneAm = formData.get("oneAm");
  const twoAm = formData.get("twoAm");
  const threeAm = formData.get("threeAm");
  const fourAm = formData.get("fourAm");
  const fiveAm = formData.get("fiveAm");
  const sixAm = formData.get("sixAm");
  const sevenAm = formData.get("sevenAm");
  const eightAm = formData.get("eightAm");
  const nineAm = formData.get("nineAm");
  const tenAm = formData.get("tenAm");
  const elevenAm = formData.get("elevenAm");
  const twelvePm = formData.get("twelvePm");
  const onePm = formData.get("onePm");
  const twoPm = formData.get("twoPm");
  const threePm = formData.get("threePm");
  const fourPm = formData.get("fourPm");
  const fivePm = formData.get("fivePm");
  const sixPm = formData.get("sixPm");
  const sevenPm = formData.get("sevenPm");
  const eightPm = formData.get("eightPm");
  const ninePm = formData.get("ninePm");
  const tenPm = formData.get("tenPm");
  const elevenPm = formData.get("elevenPm");
  const twelveAm = formData.get("twelveAm");
  const body = formData.get("body");

  if (typeof title !== "string" || title.length === 0) {
    return json(
      { errors: { body: null, title: "Title is required" } },
      { status: 400 }
    );
  }

  if (typeof body !== "string" || body.length === 0) {
    return json(
      { errors: { body: "Body is required", title: null } },
      { status: 400 }
    );
  }

  const note = await createNote({ body, title, userId });

  return redirect(`/notes/${note.id}`);
};

export default function NewNotePage() {
  const actionData = useActionData<typeof action>();
  const titleRef = useRef<HTMLInputElement>(null);

  const oneAmRef = useRef<HTMLInputElement>(null);
  const twoAmRef = useRef<HTMLInputElement>(null);
  const threeAmRef = useRef<HTMLInputElement>(null);
  const fourAmRef = useRef<HTMLInputElement>(null);
  const fiveAmRef = useRef<HTMLInputElement>(null);
  const sixAmRef = useRef<HTMLInputElement>(null);
  const sevenAmRef = useRef<HTMLInputElement>(null);
  const eightAmRef = useRef<HTMLInputElement>(null);
  const nineAmRef = useRef<HTMLInputElement>(null);
  const tenAmRef = useRef<HTMLInputElement>(null);
  const elevenAmRef = useRef<HTMLInputElement>(null);
  const twelvePmRef = useRef<HTMLInputElement>(null);
  const onePmRef = useRef<HTMLInputElement>(null);
  const twoPmRef = useRef<HTMLInputElement>(null);
  const threePmRef = useRef<HTMLInputElement>(null);
  const fourPmRef = useRef<HTMLInputElement>(null);
  const fivePmRef = useRef<HTMLInputElement>(null);
  const sixPmRef = useRef<HTMLInputElement>(null);
  const sevenPmRef = useRef<HTMLInputElement>(null);
  const eightPmRef = useRef<HTMLInputElement>(null);
  const ninePmRef = useRef<HTMLInputElement>(null);
  const tenPmRef = useRef<HTMLInputElement>(null);
  const elevenPmRef = useRef<HTMLInputElement>(null);
  const twelveAmRef = useRef<HTMLInputElement>(null);


  const bodyRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.body) {
      bodyRef.current?.focus();
    }
  }, [actionData]);

  return (
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <h1 className="py-2">{(new Date()).toLocaleDateString()}</h1>
      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          4am
          <input
            ref={fourAmRef}
            name="fourAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.fourAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.fourAm ? "4am-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.fourAm ? (
          <div className="pt-1 text-red-700" id="4am-error">
            {actionData.errors.fourAm}

          </div>
        ) : null}
      </div>

      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          5am
          <input
            ref={fiveAmRef}
            name="fiveAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.fiveAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.fiveAm ? "fiveAm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.fiveAm ? (
          <div className="pt-1 text-red-700" id="fiveAm-error">
            {actionData.errors.fiveAm}
          </div>
        ) : null}
      </div>


      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          6am
          <input
            ref={sixAmRef}
            name="sixAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.sixAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.sixAm ? "sixAm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.sixAm ? (
          <div className="pt-1 text-red-700" id="sixAm-error">
            {actionData.errors.sixAm}
          </div>
        ) : null}
      </div>

      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          7am
          <input
            ref={sevenAmRef}
            name="sevenAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.sevenAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.sevenAm ? "sevenAm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.sevenAm ? (
          <div className="pt-1 text-red-700" id="sevenAm-error">
            {actionData.errors.sevenAm}
          </div>
        ) : null}
      </div>

      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          8am
          <input
            ref={eightAmRef}
            name="eightAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.eightAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.eightAm ? "eightAm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.eightAm ? (
          <div className="pt-1 text-red-700" id="eightAm-error">
            {actionData.errors.eightAm}
          </div>
        ) : null}
      </div>


      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          9am
          <input
            ref={nineAmRef}
            name="nineAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.nineAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.nineAm ? "nineAm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.nineAm ? (
          <div className="pt-1 text-red-700" id="nineAm-error">
            {actionData.errors.nineAm}
          </div>
        ) : null}
      </div>

      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          10am
          <input
            ref={tenAmRef}
            name="tenAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.tenAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.tenAm ? "tenAm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.tenAm ? (
          <div className="pt-1 text-red-700" id="tenAm-error">
            {actionData.errors.tenAm}
          </div>
        ) : null}
      </div>

      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          11am
          <input
            ref={elevenAmRef}
            name="elevenAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.elevenAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.elevenAm ? "elevenAm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.elevenAm ? (
          <div className="pt-1 text-red-700" id="elevenAm-error">
            {actionData.errors.elevenAm}
          </div>
        ) : null}
      </div>

      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          12pm
          <input
            ref={twelvePmRef}
            npme="twelvePm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.twelvePm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.twelvePm ? "twelvePm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.twelvePm ? (
          <div className="pt-1 text-red-700" id="twelvePm-error">
            {actionData.errors.twelvePm}
          </div>
        ) : null}
      </div>


      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          1pm
          <input
            ref={onePmRef}
            npme="onePm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.onePm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.onePm ? "onePm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.onePm ? (
          <div className="pt-1 text-red-700" id="onePm-error">
            {actionData.errors.onePm}
          </div>
        ) : null}
      </div>

      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          2pm
          <input
            ref={twoPmRef}
            npme="twoPm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.twoPm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.twoPm ? "twoPm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.twoPm ? (
          <div className="pt-1 text-red-700" id="twoPm-error">
            {actionData.errors.twoPm}
          </div>
        ) : null}
      </div>

      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          3pm
          <input
            ref={threePmRef}
            npme="threePm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.threePm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.threePm ? "threePm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.threePm ? (
          <div className="pt-1 text-red-700" id="threePm-error">
            {actionData.errors.threePm}
          </div>
        ) : null}
      </div>

      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          4pm
          <input
            ref={fourPmRef}
            name="4pm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.fourPm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.fourPm ? "4pm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.fourPm ? (
          <div className="pt-1 text-red-700" id="4pm-error">
            {actionData.errors.fourPm}
          </div>
        ) : null}
      </div>

      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          5pm
          <input
            ref={fivePmRef}
            name="fivePm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.fivePm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.fivePm ? "fivePm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.fivePm ? (
          <div className="pt-1 text-red-700" id="fivePm-error">
            {actionData.errors.fivePm}
          </div>
        ) : null}
      </div>


      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          6pm
          <input
            ref={sixPmRef}
            name="sixPm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.sixPm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.sixPm ? "sixPm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.sixPm ? (
          <div className="pt-1 text-red-700" id="sixPm-error">
            {actionData.errors.sixPm}
          </div>
        ) : null}
      </div>

      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          7pm
          <input
            ref={sevenPmRef}
            name="sevenPm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.sevenPm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.sevenPm ? "sevenPm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.sevenPm ? (
          <div className="pt-1 text-red-700" id="sevenPm-error">
            {actionData.errors.sevenPm}
          </div>
        ) : null}
      </div>


      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          8pm
          <input
            ref={eightPmRef} // this is the variable name
            name="8pm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.eightPm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.eightPm ? "eightPm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.eightPm ? (
          <div className="pt-1 text-red-700" id="eightPm-error">
            {actionData.errors.eightPm}
          </div>
        ) : null}
      </div>


      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          9pm
          <input
            ref={ninePmRef}
            name="ninePm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.ninePm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.ninePm ? "ninePm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.ninePm ? (
          <div className="pt-1 text-red-700" id="ninePm-error">
            {actionData.errors.ninePm}
          </div>
        ) : null}
      </div>


      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          10pm
          <input
            ref={tenPmRef}
            name="tenPm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.tenPm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.tenPm ? "tenPm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.tenPm ? (
          <div className="pt-1 text-red-700" id="tenPm-error">
            {actionData.errors.tenPm}
          </div>
        ) : null}
      </div>



      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          11pm
          <input
            ref={elevenPmRef}
            name="elevenPm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.elevenPm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.elevenPm ? "elevenPm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.elevenPm ? (
          <div className="pt-1 text-red-700" id="elevenPm-error">
            {actionData.errors.elevenPm}
          </div>
        ) : null}
      </div>


      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          12am
          <input
            ref={twelveAmRef}
            name="twelveAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.twelveAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.twelveAm ? "twelveAm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.twelveAm ? (
          <div className="pt-1 text-red-700" id="twelveAm-error">
            {actionData.errors.twelveAm}
          </div>
        ) : null}
      </div>


      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          1am
          <input
            ref={oneAmRef}
            name="oneAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.oneAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.oneAm ? "oneAm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.oneAm ? (
          <div className="pt-1 text-red-700" id="oneAm-error">
            {actionData.errors.oneAm}
          </div>
        ) : null}
      </div>


      <div class="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          2am
          <input
            ref={twoAmRef}
            name="twoAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.twoAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.twoAm ? "twoAm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.twoAm ? (
          <div className="pt-1 text-red-700" id="twoAm-error">
            {actionData.errors.twoAm}
          </div>
        ) : null}
      </div>


      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          3am
          <input
            ref={threeAmRef}
            name="threeAm"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            aria-invalid={actionData?.errors?.threeAm ? true : undefined}
            aria-errormessage={
              actionData?.errors?.threeAm ? "threeAm-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.threeAm ? (
          <div className="pt-1 text-red-700" id="threeAm-error">
            {actionData.errors.threeAm}
          </div>
        ) : null}
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Save
        </button>
      </div>
    </Form>
  );
}
