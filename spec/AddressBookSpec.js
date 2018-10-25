describe('Address Book', function() {
  it('should be able to add a contact', function() {
    let addressBook = new AddressBook(),
        thisContact = new Contact();

    addressBook.addContact('thisContact');

    expect(addressBook.getcontact(0)).toBe(thisContact);
  });
});
