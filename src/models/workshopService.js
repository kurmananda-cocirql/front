class Workshop {
  constructor({
    id,
    name,
    description,
    shortName,
    shortDescription,
    availableSlots,
    categoryId,
    startDate,
    endDate,
    maxParticipants,
    fees,
    approvalStatus,
    sessionDates,
    rating,
    highlights,
    displayPictureUrl,
    bannerUrl,
    mode,
    status
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.shortName = shortName;
    this.shortDescription = shortDescription;
    this.availableSlots = availableSlots;
    this.categoryId = categoryId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.maxParticipants = maxParticipants;
    this.fees = fees;
    this.approvalStatus = approvalStatus;
    this.sessionDates = sessionDates;
    this.rating = rating;
    this.highlights = highlights;
    this.displayPictureUrl = displayPictureUrl;
    this.bannerUrl = bannerUrl;
    this.mode = mode;
    this.status = status;
  }
}
