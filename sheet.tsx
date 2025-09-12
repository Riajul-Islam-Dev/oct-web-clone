<SheetContent side="right" className="w-full sm:w-[600px] max-w-[600px] p-0 overflow-y-auto bg-[#ffffff]">
        <SheetHeader className="px-8 py-6 border-b-0">
          <div className="flex items-start justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8 p-0 text-[#899ab2] hover:text-[#282828] hover:bg-transparent -ml-2"
            >
              <X className="h-5 w-5" />
            </Button>
            <h2 className="text-lg font-medium text-[#282828] tracking-wide flex-1 text-left ml-4">
              CREATE FLIGHT DURATION POLICY
            </h2>
          </div>
        </SheetHeader>

        <div className="px-8 py-2 space-y-8">
          {/* Policy Level */}
          <div className="space-y-3">
            <Label htmlFor="policy-level" className="text-[#282828] font-normal text-base">
              Policy level <span className="text-red-500">*</span>
            </Label>
            <Select value={policyLevel} onValueChange={setPolicyLevel}>
              <SelectTrigger className="border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]">
                <SelectValue placeholder="Select policy level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default-policy">Default policy</SelectItem>
                <SelectItem value="premium-policy">Premium policy</SelectItem>
                <SelectItem value="executive-policy">Executive policy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Assignment Secondary Policy Link */}
          <div className="flex items-center gap-2">
            <Button variant="link" className="text-[#316db4] p-0 h-auto font-normal text-base hover:text-[#316db4]/80">
              Assignment secondary policy
            </Button>
            <Info className="h-4 w-4 text-[#316db4]" />
          </div>

          {/* Policy Assignment Scope */}
          <div className="space-y-4">
            <Label className="text-[#282828] font-normal text-base">Policy Assignment Scope:</Label>
            <RadioGroup value={assignmentScope} onValueChange={setAssignmentScope} className="flex gap-8">
              <div className="flex items-center space-x-3">
                <RadioGroupItem
                  value="by-attribute"
                  id="by-attribute"
                  className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]"
                />
                <Label htmlFor="by-attribute" className="text-[#282828] font-normal">
                  By Attribute
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem
                  value="by-user"
                  id="by-user"
                  className="border-[#b4b4b4] data-[state=checked]:bg-[#316db4] data-[state=checked]:border-[#316db4]"
                />
                <Label htmlFor="by-user" className="text-[#282828] font-normal">
                  By User
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Select Users */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">
              Select users <span className="text-red-500">*</span>
            </Label>
            <div className="border border-[#e2e8f0] rounded-md p-4 bg-[#f7f9fc] min-h-[60px]">
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedUsers.map((user) => (
                  <Badge
                    key={user}
                    variant="secondary"
                    className="bg-[#e2e8f0] text-[#282828] border-0 px-3 py-1 rounded-md font-normal"
                  >
                    {user}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveUser(user)}
                      className="ml-2 h-4 w-4 p-0 hover:bg-transparent text-[#656565]"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <span
                  className="text-[#899ab2] text-sm cursor-pointer"
                  onClick={() => document.getElementById("add-user-input")?.focus()}
                >
                  Add user
                </span>
                <Input
                  id="add-user-input"
                  value={newUser}
                  onChange={(e) => setNewUser(e.target.value)}
                  className="border-none shadow-none p-0 h-auto text-[#282828] placeholder:text-[#899ab2] bg-transparent"
                  onKeyPress={(e) => e.key === "Enter" && handleAddUser()}
                />
              </div>
            </div>
          </div>

          {/* Traveler Type */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">
              Traveler type<span className="text-red-500">*</span>
            </Label>
            <Select value={travelerType} onValueChange={setTravelerType}>
              <SelectTrigger className="border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#282828]">
                <SelectValue placeholder="Select traveler type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employee">Employee</SelectItem>
                <SelectItem value="contractor">Contractor</SelectItem>
                <SelectItem value="executive">Executive</SelectItem>
                <SelectItem value="guest">Guest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Short Flight */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">Short flight</Label>
            <Select value={shortFlightDuration} onValueChange={setShortFlightDuration}>
              <SelectTrigger className="border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#899ab2]">
                <SelectValue placeholder="Select flight duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-2">0-2 hours</SelectItem>
                <SelectItem value="2-4">2-4 hours</SelectItem>
                <SelectItem value="4-6">4-6 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Long Flight */}
          <div className="space-y-3">
            <Label className="text-[#282828] font-normal text-base">long flight</Label>
            <Select value={longFlightDuration} onValueChange={setLongFlightDuration}>
              <SelectTrigger className="border-[#e2e8f0] bg-[#f7f9fc] h-12 text-[#899ab2]">
                <SelectValue placeholder="Select flight duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6-8">6-8 hours</SelectItem>
                <SelectItem value="8-12">8-12 hours</SelectItem>
                <SelectItem value="12+">12+ hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="px-8 py-6 mt-8 flex justify-end gap-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="bg-[#eda92c] hover:bg-[#eda92c]/90 text-white border-[#eda92c] px-8 py-2 h-12 rounded-full font-normal"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-[#316db4] hover:bg-[#316db4]/90 text-white px-8 py-2 h-12 rounded-full font-normal"
          >
            Add
          </Button>
        </div>
      </SheetContent>