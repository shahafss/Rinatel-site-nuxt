import { extend, localize } from "vee-validate";
import { email, required } from "vee-validate/dist/rules";

extend("email", email);
extend("required", required);

localize({
  en: {
    messages: {
      email: "This isn't a valid email",
      required: "This is required"
    },
    fields: {
      email: {
        required: "We need your email address"
      }
    }
  }
});
