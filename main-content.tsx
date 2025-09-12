          {/* Main Content */}
          <main className="p-6">
            <div className="space-y-6">
              {/* Flight Policy Section */}
              <div className="bg-white rounded-lg border border-[#e2e8f0] p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-[#18181a] mb-1">Flight Policy</h2>
                    <p className="text-sm text-[#64748b]">Restrict users travel to specific d--------</p>
                  </div>
                </div>

                {/* Upgrade Table */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium text-[#18181a]">Upgrade</h3>
                    <Button
                      onClick={() => setIsFlightPolicyOpen(true)}
                      className="bg-[#316db4] hover:bg-[#087dc2] text-white px-4 py-2 text-sm"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add New
                    </Button>
                  </div>

                  <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-[#f7f9fc] border-b border-[#e2e8f0]">
                          <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Policy level</TableHead>
                          <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Traveler type</TableHead>
                          <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Short</TableHead>
                          <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">long</TableHead>
                          <TableHead className="text-[#5e6369] font-medium text-sm py-3 px-4">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {upgradeData.map((row, index) => (
                          <TableRow key={index} className="border-b border-[#e2e8f0] hover:bg-[#f5fafd]">
                            <TableCell className="py-3 px-4 text-sm text-[#18181a]">{row.policyLevel}</TableCell>
                            <TableCell className="py-3 px-4 text-sm text-[#18181a]">{row.travelerType}</TableCell>
                            <TableCell className="py-3 px-4 text-sm text-[#18181a] whitespace-pre-line">
                              {row.short}
                            </TableCell>
                            <TableCell className="py-3 px-4 text-sm text-[#18181a] whitespace-pre-line">
                              {row.long}
                            </TableCell>
                            <TableCell className="py-3 px-4">
                              <div className="flex items-center gap-2">
                                <Button variant="ghost" size="sm" className="p-1 h-auto hover:bg-[#f5fafd]">
                                  <Edit className="w-4 h-4 text-[#64748b]" />
                                </Button>
                                <Button variant="ghost" size="sm" className="p-1 h-auto hover:bg-[#f5fafd]">
                                  <Trash2 className="w-4 h-4 text-[#eda92c]" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </main>