"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { ContactFields } from "typings";

import s from "./ContactArea.module.scss";

export default function ContactArea() {
  const [isSubmitting, setSubmitting] = useState(false);
  const { register, handleSubmit, reset, watch } = useForm<ContactFields>();

  const onSubmit = async (data: ContactFields) => {
    try {
      setSubmitting(true);

      const response = await fetch("/api/mails", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Mail Sent");
      }
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      setSubmitting(false);
    }
  };

  return (
    <div className={s.contactArea}>
      <div className={s.window} data-type="form">
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="name">
              _name:
            </label>
            <input
              className={s.formField}
              type="text"
              required
              {...register("name")}
            />
          </div>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="email">
              _email:
            </label>
            <input
              className={s.formField}
              type="email"
              required
              {...register("email")}
            />
          </div>
          <div className={s.formControl}>
            <label className={s.formLabel} htmlFor="message">
              _message:
            </label>
            <textarea
              className={s.formField}
              rows={5}
              required
              {...register("message")}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`button button--secondary ${s.formSubmit}`}
            data-disabled={isSubmitting ? "true" : "false"}
          >
            submit-message
          </button>
        </form>
      </div>

      <div className={s.window} data-type="output">
        <ul className={s.output}>
          {/* Output Line */}
          <li className={s.outputLine}>
            <span className="color-magenta">const </span>
            <span className="color-purple">button </span>
            <span className="color-magenta">= </span>
            <span className="color-purple">{"document.querySelector"}</span>
            <span>{"("}</span>
            <span className="color-brown">&quot;#sendBtn&quot;</span>
            <span>{");"}</span>
          </li>
          {/* Output Line */}
          <li className={s.outputLine}></li>
          {/* Output Line */}
          <li className={s.outputLine}>
            <span className="color-magenta">const </span>
            <span className="color-purple">message </span>
            <span className="color-magenta">= </span>
            <span>{"{"}</span>
          </li>
          {/* Output Line */}
          <li className={s.outputLine}>
            <span className="color-purple indent">name</span>
            <span>: </span>
            <span className="color-brown">&quot;{watch("name")}&quot;</span>
            <span>,</span>
          </li>
          {/* Output Line */}
          <li className={s.outputLine}>
            <span className="color-purple indent">email</span>
            <span>: </span>
            <span className="color-brown">&quot;{watch("email")}&quot;</span>
            <span>,</span>
          </li>
          {/* Output Line */}
          <li className={s.outputLine}>
            <span className="color-purple indent">message</span>
            <span>: </span>
            <span className="color-brown">&quot;{watch("message")}&quot;</span>
            <span>,</span>
          </li>
          {/* Output Line */}
          <li className={s.outputLine}>
            <span className="color-purple indent">date</span>
            <span>: </span>
            <span className="color-brown">
              &quot;
              {new Date().toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
              &quot;
            </span>
            <span>,</span>
          </li>
          {/* Output Line */}
          <li className={s.outputLine}>{"}"}</li>
          {/* Output Line */}
          <li className={s.outputLine}></li>
          {/* Output Line */}
          <li className={s.outputLine}>
            <span className="color-purple">button</span>
            <span>.</span>
            <span className="color-purple">addEventListener</span>
            <span>{"("}</span>
            <span className="color-brown">&quot;click&quot;</span>
            <span>{", () "}</span>
            <span className="color-magenta">{"=> "}</span>
            <span>{"{"}</span>
          </li>
          {/* Output Line */}
          <li className={s.outputLine}>
            <span className="color-purple indent">form</span>
            <span>.</span>
            <span className="color-purple">send</span>
            <span>{"("}</span>
            <span className="color-purple">message</span>
            <span>{");"}</span>
          </li>
          {/* Output Line */}
          <li className={s.outputLine}>{"})"}</li>
        </ul>
      </div>
    </div>
  );
}
