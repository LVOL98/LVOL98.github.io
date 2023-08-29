variable "resource_group_name" {
  default = "rg-PersonalWebsite-WestEurope-prod-1"
}

variable "location" {
  default = "westeurope"
}

variable "static_web_app_name" {
  default = "lvol-website-WestEurope-prod-1"
}

variable "tags" {
  type = map
  default = {
    environment = "prod",
    project = "personal-website"
  }
}
