import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

import { RuleListItem } from '../../../core/models/rule-list-item.model';
import { RulesService } from '../../../core/services/rules.service';

@Component({
  selector: 'app-rules-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './rules-list.component.html',
  styleUrl: './rules-list.component.scss'
})
export class RulesListComponent implements OnInit {
  rules: RuleListItem[] = [];
  displayedColumns = ['id', 'repositoryName', 'title', 'text', 'userId'];

  constructor(private rulesService: RulesService, private router: Router) { }

  ngOnInit(): void {
    this.rulesService.getRules().subscribe(data => this.rules = data);
  }

  onCreate() {
    this.router.navigate(['pages', 'main', 'rules', 'create']);
  }

  onEdit(id: string) {
    this.router.navigate(['pages', 'main', 'rules', 'edit', id]);
  }
}
