export type JanazahPost = {
  id: string;
  deceasedName: string;
  city: string;
  mosque: string;
  prayerAt: string;
  burialAt: string;
  cemetery: string;
  contactName: string;
  notes?: string;
};

export type Subscription = {
  email: string;
  city?: string;
  mosque?: string;
};
