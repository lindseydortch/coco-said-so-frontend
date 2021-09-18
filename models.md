class Agency(models.Model):
  agency_name = models.CharField(max_length=100)
  location = models.CharField(max_length=100)
  agency_instagram_hadnle = models.CharField(max_length=500, blank=True)
  insta_followers = models.CharField(max_length=100, blank=True)
  digitals_required = models.CharField(max_length=5, blank=True)
  digitals_requirements = models.CharField(max_length=2000, blank=True)
  outreach = models.CharField(max_length=5, blank=True)
  date_digitals_submitted = models.DateField(auto_now=False, blank=True)
  notes = models.CharField(max_length=5000, blank=True)

class Goals(models.Model):
  goal = models.CharField(max_length=5000)
  date_date = models.DateField(auto_now=False, blank=True)
  tasks_to_complete_goal = models.CharField(max_length=5000, blank=True)

class Photographer(models.Model):
  photographer_name = models.CharField(max_length=100)
  photographer_location = models.CharField(max_length=100)
  photographer_instagram_hadnle = models.CharField(max_length=500, blank=True)
  insta_followers = models.CharField(max_length=100, blank=True)
  mutual_models = models.CharField(max_length=1000, blank=True)
  outreach = models.CharField(max_length=5, blank=True)
  outreach_date = models.DateField(auto_now=False, blank=True)
  agencies_work_with = models.CharField(max_length=1000, blank=True)
  notes = models.CharField(max_length=5000, blank=True)