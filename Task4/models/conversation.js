const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    recipients: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    lastMessageAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("conversation", ConversationSchema);
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privac