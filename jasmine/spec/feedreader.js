/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // This is test case to check allFeeds object has URL defined & not empty.
        it('url are defined', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        //This is test case to check allFeeds object has name defined ans not empty.
        it('name are defined', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });


    // Second test to make sure The menu is hidden & clickable.
    describe('The menu', function() {


        //Test case to check menu element is hidden when page loads.
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });



         //Test case to check menu icon is clicked & menu is visible or hidden.
        it('visibility when the menu icon is clicked', function() {
            $(".menu-icon-link").click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $(".menu-icon-link").click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });


        });

    /* Write a new test suite named "Initial Entries" */
        describe('Initial Entries', function () {

        //test case to check loadFeed has single .entry class withing .feed container.
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has been loaded', function(done) {
            expect($('.feed a').children('.entry').length).toBeGreaterThan(0);
            done();
        });

        });

        //test case to check loadfeed content got changed or not.
        describe('New Feed Selection', function () {

            var oldFeed;

            beforeEach(function(done) {

                loadFeed(0, function() {
                    oldFeed = $('.feed').html();

                    loadFeed(1, done);
                });
            });

            it('new feed is loaded', function() {
                expect($('.feed').html()).not.toBe(oldFeed);
            });


        });

}());
