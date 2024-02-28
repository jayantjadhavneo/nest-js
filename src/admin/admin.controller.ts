import { Controller, Get, Post, Body, Patch, Param, Delete,Render } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('dashboard')
  @Render('home')
  getDashboard() {
    return {
      layout: 'default', // Specify the layout template
      title: 'Dashboard', // Pass data to the layout template
    };// Default theme is light
  }
  
}
