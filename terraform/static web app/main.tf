terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "3.71.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "resource_group" {
  name = var.resource_group_name
  location = var.location
  tags = var.tags
}

resource "azurerm_static_site" "static_web_app" {
  name = var.static_web_app_name
  location = var.location
  resource_group_name = var.resource_group_name
  sku_size = "Free"
  sku_tier = "Free"
  tags = var.tags
}
