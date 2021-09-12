const mongoose = require("mongoose");

const newsLetterSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  newsletterBody: {
    type: String,
    required: true,
  },
});

mongoose.model("NewsLetter", newsLetterSchema);
