const express = require("express");
const router = express.Router({mergeParams: true}); // to access params from parent route
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isReviewAuthor, validateReview} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


//reviews - post route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//reviews - delete route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;