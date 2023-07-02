import express, { Request, Response } from 'express';
import { EventService } from './event.service';
import { EventType } from './event.interface';
import { validationResult, checkSchema } from 'express-validator';
import { eventValidationSchema } from '../../validationSchema/eventValidationSchema';

export const eventRouter = express.Router();

interface RequestParams {
  id: string;
  slug: string;
}

interface RequestBody {
  id: string;
  eventInfo: EventType;
}
eventRouter.get('/', async (_, res: Response) => {
  try {
    const event = await EventService.getAllEvents();
    res.status(200).send({ success: true, event: event });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

eventRouter.get(
  '/id/:id',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { id } = req.params;
      const event = await EventService.getEventById(id);
      res.status(200).send({ success: true, event: event });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

eventRouter.get(
  '/slug/:slug',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { slug } = req.params;
      const event = await EventService.getEventBySlug(slug);
      res.status(200).send({ success: true, event: event });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

eventRouter.post(
  '/create',
  checkSchema(eventValidationSchema.createEventSchema),
  async (req: Request<RequestBody>, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const eventInfo = req.body;
      const event = await EventService.createEvent(eventInfo);
      res.status(200).send({ success: true, event: event });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

eventRouter.post(
  '/update/:id',
  checkSchema(eventValidationSchema.createEventSchema),
  async (req: Request<RequestParams, RequestBody>, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const eventInfo = req.body;
      const { id } = req.params;
      const event = await EventService.updateEvent(id, eventInfo);
      res.status(200).send({ success: true, event: event });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);

eventRouter.post(
  '/delete',
  checkSchema(eventValidationSchema.deleteSchema),
  async (req: Request<RequestBody>, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({
          errors: errors.array(),
        });
      }
      const { id } = req.body;
      const event = await EventService.deleteEvent(id);
      res.status(200).send({ success: true, event: event });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
);