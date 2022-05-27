const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")("sk_test_51L3cKrSGMtu7bmb0HQfsi3uSh7jvj7HbVGnX0Smt1FcBaMcqkEIT43uMF17nFC8r82d4kYcFVd7pC4sPOc4K97BW00YN0IqZBl");


exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "E-Design",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey:  "pk_test_51L3cKrSGMtu7bmb01JHNpDRpmND3m1nTdd2cNXXkqV0JxvlGAM2T2sE5EyvxB5vGbjG4XXz8MLWG085kYA2ysnyb00BWHO4Djg"});
});
