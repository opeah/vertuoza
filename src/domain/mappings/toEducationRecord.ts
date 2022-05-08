import { _EducationRecord } from '@/domain/entities';
import { DbEducationRecord } from '@/domain/db';

export const toEducationRecord = (
  educationRecord: DbEducationRecord
): _EducationRecord => ({
  id: educationRecord.id,
  name: educationRecord.school_name,
  school: educationRecord.field_of_study,
  period: educationRecord.started_at,
  place: `${educationRecord.city} ${educationRecord.country}`,
});
