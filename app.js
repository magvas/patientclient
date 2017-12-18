var viewModel = () => {
    this.firstname = ko.observable('');
    this.lastname = ko.observable('');
    this.fullname = ko.computed(() => {
        return this.firstname() + " " + this.lastname();
    });
};

ko.applyBindings(viewModel);