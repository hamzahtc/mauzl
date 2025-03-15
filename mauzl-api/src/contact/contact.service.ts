import { Injectable, Logger } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './entities/contact.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {
    this.logger = new Logger('ContactService');
  }

  private readonly logger: Logger;

  async create(createContactDto: CreateContactDto) {
    try {
      const contact = this.contactRepository.create(createContactDto);
      const savedContact = await this.contactRepository.save(contact);
      this.logger.log(
        `Contact created successfully with ID: ${savedContact.id}`,
      );
      return savedContact;
    } catch (error) {
      this.logger.error(`Failed to create contact: ${error.message}`);
      throw error;
    }
  }

  findAll() {
    return `This action returns all contact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  update(id: number) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
